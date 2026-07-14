import nodemailer from "nodemailer";
import type Mail from "nodemailer/lib/mailer";

export interface ContactEmailPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function getSmtpConfig() {
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.replace(/\s/g, "");
  const host = process.env.SMTP_HOST?.trim() ?? "smtp.gmail.com";
  const port = Number(process.env.SMTP_PORT ?? 587);
  const secure = process.env.SMTP_SECURE === "true";

  if (!user || !pass) {
    throw new Error("SMTP_USER and SMTP_PASS must be set in environment variables.");
  }

  return { host, port, user, pass, secure };
}

export function createMailTransporter(): Mail.Transporter {
  const { host, port, user, pass, secure } = getSmtpConfig();

  if (host === "smtp.gmail.com") {
    return nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    requireTLS: !secure,
    auth: { user, pass },
    tls: { minVersion: "TLSv1.2" },
  });
}

export async function sendViaSmtp(payload: ContactEmailPayload): Promise<void> {
  const { user } = getSmtpConfig();
  const transporter = createMailTransporter();
  await transporter.verify();

  const fromEmail = process.env.SMTP_FROM_EMAIL?.trim() || user;
  const recipient = process.env.CONTACT_TO_EMAIL?.trim() || user;

  await transporter.sendMail({
    from: `"Portfolio Contact" <${fromEmail}>`,
    to: recipient,
    replyTo: `"${payload.name}" <${payload.email}>`,
    subject: `[Portfolio] ${payload.subject}`,
    text: buildPlainText(payload),
    html: buildHtml(payload),
  });
}

export async function sendViaWeb3Forms(
  payload: ContactEmailPayload
): Promise<void> {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY?.trim();

  if (!accessKey) {
    throw new Error("WEB3FORMS_ACCESS_KEY is not configured.");
  }

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      name: payload.name,
      email: payload.email,
      subject: `[Portfolio] ${payload.subject}`,
      message: payload.message,
      from_name: "Portfolio Contact Form",
    }),
  });

  const result = (await response.json()) as { success?: boolean; message?: string };

  if (!response.ok || !result.success) {
    throw new Error(result.message || "Web3Forms delivery failed.");
  }
}

export async function sendContactEmail(payload: ContactEmailPayload): Promise<void> {
  const web3Key = process.env.WEB3FORMS_ACCESS_KEY?.trim();

  if (web3Key) {
    await sendViaWeb3Forms(payload);
    return;
  }

  await sendViaSmtp(payload);
}

function buildPlainText(payload: ContactEmailPayload): string {
  return [
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Subject: ${payload.subject}`,
    "",
    "Message:",
    payload.message,
  ].join("\n");
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function buildHtml(payload: ContactEmailPayload): string {
  const safeName = escapeHtml(payload.name);
  const safeEmail = escapeHtml(payload.email);
  const safeSubject = escapeHtml(payload.subject);
  const safeMessage = escapeHtml(payload.message);

  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0f172a; color: #ffffff; padding: 32px; border-radius: 12px;">
      <h2 style="color: #3B82F6; border-bottom: 2px solid #3B82F6; padding-bottom: 10px; margin-top: 0;">
        New Portfolio Message
      </h2>
      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #94A3B8;">Name:</td>
          <td style="padding: 8px 0; color: #CBD5E1;">${safeName}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #94A3B8;">Email:</td>
          <td style="padding: 8px 0;"><a href="mailto:${safeEmail}" style="color: #60A5FA;">${safeEmail}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #94A3B8;">Subject:</td>
          <td style="padding: 8px 0; color: #CBD5E1;">${safeSubject}</td>
        </tr>
      </table>
      <div style="background: #111827; padding: 20px; border-radius: 8px; margin-top: 20px; border: 1px solid rgba(96,165,250,0.15);">
        <p style="margin: 0 0 10px; font-weight: bold; color: #94A3B8;">Message:</p>
        <p style="margin: 0; white-space: pre-wrap; line-height: 1.6; color: #CBD5E1;">${safeMessage}</p>
      </div>
    </div>
  `;
}

export function getMailErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    const mailError = error as Error & { code?: string; responseCode?: number };

    if (mailError.code === "EAUTH" || mailError.responseCode === 535) {
      return "Gmail rejected the app password. Create a new App Password at Google Account → Security → App Passwords, update SMTP_PASS in .env.local, and restart the dev server. Or add WEB3FORMS_ACCESS_KEY for instant delivery.";
    }

    if (mailError.code === "ESOCKET" || mailError.code === "ETIMEDOUT") {
      return "Could not connect to the email server. Check your internet connection and try again.";
    }

    return mailError.message;
  }

  return "Failed to send message. Please try again later.";
}

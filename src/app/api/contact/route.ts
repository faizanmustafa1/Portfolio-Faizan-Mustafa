import { NextResponse } from "next/server";
import { getMailErrorMessage, sendContactEmail } from "@/lib/mail";

interface ContactPayload {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const name = body.name?.trim();
    const email = body.email?.trim();
    const subject = body.subject?.trim();
    const message = body.message?.trim();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const hasWeb3Forms = Boolean(process.env.WEB3FORMS_ACCESS_KEY?.trim());
    const hasSmtp =
      Boolean(process.env.SMTP_USER?.trim()) &&
      Boolean(process.env.SMTP_PASS?.trim());

    if (!hasWeb3Forms && !hasSmtp) {
      return NextResponse.json(
        {
          error:
            "Email service is not configured. Add WEB3FORMS_ACCESS_KEY or SMTP credentials to .env.local.",
        },
        { status: 503 }
      );
    }

    await sendContactEmail({ name, email, subject, message });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);

    const message = getMailErrorMessage(error);
    const isAuthError =
      error instanceof Error &&
      "code" in error &&
      (error as { code?: string }).code === "EAUTH";

    return NextResponse.json(
      { error: message },
      { status: isAuthError ? 503 : 500 }
    );
  }
}

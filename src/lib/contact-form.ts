export interface ContactFormPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface Web3FormsResponse {
  success?: boolean;
  message?: string;
}

export async function submitContactForm(
  payload: ContactFormPayload
): Promise<void> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim();

  if (!accessKey) {
    throw new Error(
      "Contact form is not configured. Add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to .env.local and restart the server."
    );
  }

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      name: payload.name,
      email: payload.email,
      subject: `[Portfolio] ${payload.subject}`,
      message: payload.message,
      from_name: "Portfolio Contact Form",
      replyto: payload.email,
    }),
  });

  const raw = await response.text();

  let result: Web3FormsResponse;
  try {
    result = JSON.parse(raw) as Web3FormsResponse;
  } catch {
    throw new Error(
      "Contact service returned an invalid response. Check your Web3Forms access key and domain settings."
    );
  }

  if (!response.ok || !result.success) {
    throw new Error(result.message || "Failed to send message. Please try again.");
  }
}

export function getContactErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  return "Failed to send message. Please try again later.";
}

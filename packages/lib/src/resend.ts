import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY || "";
export const resend = resendApiKey ? new Resend(resendApiKey) : null;

export interface EmailOptions {
  to: string | string[];
  subject: string;
  html: string;
}

export async function sendEmailAlert({ to, subject, html }: EmailOptions) {
  if (!resend) {
    console.warn("Resend API key is not configured. Email alert skipped:", { subject });
    return { success: false, error: "Resend not configured" };
  }

  const fromEmail = process.env.RESEND_FROM_EMAIL || "alerts@maddybgmistore.in";

  try {
    const data = await resend.emails.send({
      from: `MBS Alerts <${fromEmail}>`,
      to: Array.isArray(to) ? to : [to],
      subject,
      html,
    });
    return { success: true, data };
  } catch (error: any) {
    console.error("Resend email delivery failed:", error);
    return { success: false, error: error.message };
  }
}

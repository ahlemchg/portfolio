import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validation basique des données
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Tous les champs sont obligatoires" }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: process.env.SENDER_EMAIL || "Portfolio Contact <onboarding@resend.dev>",
      to: [process.env.RECEIVER_EMAIL || "chegrouneahlem@gmail.com"],
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333;">Nouveau message depuis votre portfolio</h2>
          <table style="width: 100%; margin-top: 20px; border-collapse: collapse;">
            <tr style="background-color: #f5f5f5;">
              <td style="padding: 12px; border: 1px solid #ddd;"><strong>Nom</strong></td>
              <td style="padding: 12px; border: 1px solid #ddd;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #ddd;"><strong>Email</strong></td>
              <td style="padding: 12px; border: 1px solid #ddd;">${email}</td>
            </tr>
            <tr style="background-color: #f5f5f5;">
              <td style="padding: 12px; border: 1px solid #ddd;"><strong>Sujet</strong></td>
              <td style="padding: 12px; border: 1px solid #ddd;">${subject}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #ddd;"><strong>Message</strong></td>
              <td style="padding: 12px; border: 1px solid #ddd;">${message}</td>
            </tr>
          </table>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Erreur lors de l'envoi de l'email" }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error("Unexpected error:", err);
    return NextResponse.json({ error: "Erreur serveur interne" }, { status: 500 });
  }
}

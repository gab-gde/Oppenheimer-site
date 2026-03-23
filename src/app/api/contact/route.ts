import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// ══════════════════════════════════════════════════════════════
// CONFIGURATION EMAIL — À remplir avant mise en ligne
// ══════════════════════════════════════════════════════════════
const EMAIL_TO = process.env.EMAIL_TO || "contact@edgarfaure.fr";
const SMTP_HOST = process.env.SMTP_HOST || "smtp.gmail.com";
const SMTP_PORT = parseInt(process.env.SMTP_PORT || "587");
const SMTP_USER = process.env.SMTP_USER || "";
const SMTP_PASS = process.env.SMTP_PASS || "";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const nom = formData.get("nom") as string;
    const email = formData.get("email") as string;
    const telephone = formData.get("telephone") as string;
    const description = formData.get("description") as string;
    const urgence = formData.get("urgence") as string;

    // Validation basique
    if (!nom || !email || !description) {
      return NextResponse.json(
        { error: "Champs obligatoires manquants" },
        { status: 400 }
      );
    }

    // Construction du corps de l'email
    const urgenceLabel =
      urgence === "Urgent"
        ? "🔴 URGENT"
        : urgence === "Prioritaire"
          ? "🟠 Prioritaire"
          : "🟢 Standard";

    const htmlBody = `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto;">
        <div style="border-bottom: 2px solid #B39355; padding-bottom: 16px; margin-bottom: 24px;">
          <h2 style="color: #1A1B1F; margin: 0;">Nouvelle demande confidentielle</h2>
          <p style="color: #999; font-size: 14px; margin-top: 4px;">Via le formulaire du site</p>
        </div>

        <table style="width: 100%; font-size: 14px; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #999; width: 140px;">Nom</td>
            <td style="padding: 8px 0; color: #1A1B1F; font-weight: bold;">${nom}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #999;">Email</td>
            <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #B39355;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #999;">Téléphone</td>
            <td style="padding: 8px 0; color: #1A1B1F;">${telephone || "Non renseigné"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #999;">Urgence</td>
            <td style="padding: 8px 0; color: #1A1B1F;">${urgenceLabel}</td>
          </tr>
        </table>

        <div style="margin-top: 24px; padding: 16px; background: #F4F3EF; border-left: 3px solid #B39355;">
          <p style="color: #999; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px;">Description de la situation</p>
          <p style="color: #1A1B1F; font-size: 14px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${description}</p>
        </div>

        <p style="margin-top: 24px; font-size: 12px; color: #999;">
          Ce message a été envoyé depuis le formulaire confidentiel du site.
        </p>
      </div>
    `;

    // Envoi via nodemailer (si SMTP configuré)
    if (SMTP_USER && SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: SMTP_PORT,
        secure: SMTP_PORT === 465,
        auth: {
          user: SMTP_USER,
          pass: SMTP_PASS,
        },
      });

      // Récupérer les fichiers joints
      const attachments: { filename: string; content: Buffer }[] = [];
      const files = formData.getAll("documents");
      for (const file of files) {
        if (file instanceof File && file.size > 0) {
          const buffer = Buffer.from(await file.arrayBuffer());
          attachments.push({
            filename: file.name,
            content: buffer,
          });
        }
      }

      await transporter.sendMail({
        from: `"Site Oppenheimer" <${SMTP_USER}>`,
        to: EMAIL_TO,
        replyTo: email,
        subject: `[${urgenceLabel}] Nouvelle demande — ${nom}`,
        html: htmlBody,
        attachments,
      });
    } else {
      // Mode développement : log dans la console
      console.log("═══ NOUVELLE DEMANDE ═══");
      console.log({ nom, email, telephone, urgence, description });
      console.log("════════════════════════");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur envoi formulaire:", error);
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}

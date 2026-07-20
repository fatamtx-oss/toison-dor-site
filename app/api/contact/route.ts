import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function echapperHtml(texte: string) {
  return texte
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const prenom =
      typeof body.prenom === "string" ? body.prenom.trim() : "";
    const email =
      typeof body.email === "string" ? body.email.trim() : "";
    const projet =
      typeof body.projet === "string" ? body.projet.trim() : "";

    if (!prenom || !email || !projet) {
      return NextResponse.json(
        {
          success: false,
          message: "Tous les champs sont obligatoires.",
        },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Toison d'Or <bonjour@send.toisondor.agency>",
      to: ["bonjour@toisondor.agency"],
      replyTo: email,
      subject: `Nouvelle demande de ${prenom}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #1E1E1E; line-height: 1.7;">
          <h2 style="font-weight: 500;">Nouvelle demande depuis le site</h2>

          <p><strong>Prénom :</strong> ${echapperHtml(prenom)}</p>
          <p><strong>Adresse e-mail :</strong> ${echapperHtml(email)}</p>

          <p><strong>Projet :</strong></p>
          <p>${echapperHtml(projet).replaceAll("\n", "<br />")}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Erreur Resend :", error);

      return NextResponse.json(
        {
          success: false,
          message: "L’e-mail n’a pas pu être envoyé.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Message envoyé.",
    });
  } catch (error) {
    console.error("Erreur de la route contact :", error);

    return NextResponse.json(
      {
        success: false,
        message: "Une erreur est survenue.",
      },
      { status: 500 }
    );
  }
}
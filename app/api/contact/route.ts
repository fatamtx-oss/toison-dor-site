import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Couleur or utilisée pour la signature Toison d'Or.
// Elle doit correspondre exactement à celle du site.
const COULEUR_OR = "#B08D57";

function echapperHtml(texte: string) {
  return texte
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function adresseEmailValide(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const prenom =
      typeof body.prenom === "string" ? body.prenom.trim() : "";

    const email =
      typeof body.email === "string" ? body.email.trim().toLowerCase() : "";

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

    if (!adresseEmailValide(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "L’adresse e-mail renseignée n’est pas valide.",
        },
        { status: 400 }
      );
    }

    const prenomSecurise = echapperHtml(prenom);
    const emailSecurise = echapperHtml(email);
    const projetSecurise = echapperHtml(projet).replaceAll("\n", "<br />");

    /*
     * Premier e-mail :
     * la demande reçue par Toison d'Or.
     */
    const reception = await resend.emails.send({
      from: "Toison d'Or <bonjour@send.toisondor.agency>",
      to: ["bonjour@toisondor.agency"],
      replyTo: email,
      subject: `Nouvelle demande de ${prenom}`,
      html: `
        <!doctype html>
        <html lang="fr">
          <body style="margin: 0; padding: 0; background-color: #F7F5F0;">
            <div
              style="
                max-width: 640px;
                margin: 0 auto;
                padding: 48px 24px;
                font-family: Arial, Helvetica, sans-serif;
                color: #1E1E1E;
                line-height: 1.7;
              "
            >
              <div
                style="
                  background-color: #FFFFFF;
                  padding: 40px;
                  border: 1px solid #E8E3DA;
                "
              >
                <p
                  style="
                    margin: 0 0 32px;
                    font-size: 21px;
                    font-weight: 400;
                  "
                >
                  Nouvelle demande depuis le site
                </p>

                <p style="margin: 0 0 12px;">
                  Prénom : ${prenomSecurise}
                </p>

                <p style="margin: 0 0 32px;">
                  Adresse e-mail :
                  <a
                    href="mailto:${emailSecurise}"
                    style="color: #1E1E1E;"
                  >
                    ${emailSecurise}
                  </a>
                </p>

                <p style="margin: 0 0 12px;">Projet :</p>

                <p
                  style="
                    margin: 0;
                    white-space: normal;
                  "
                >
                  ${projetSecurise}
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
Nouvelle demande depuis le site

Prénom : ${prenom}
Adresse e-mail : ${email}

Projet :
${projet}
      `.trim(),
    });

    if (reception.error) {
      console.error(
        "Erreur Resend lors de la réception de la demande :",
        reception.error
      );

      return NextResponse.json(
        {
          success: false,
          message: "L’e-mail n’a pas pu être envoyé.",
        },
        { status: 500 }
      );
    }

    /*
     * Deuxième e-mail :
     * la confirmation automatique envoyée au visiteur.
     */
    const confirmation = await resend.emails.send({
      from: "Toison d'Or <bonjour@send.toisondor.agency>",
      to: [email],
      replyTo: "bonjour@toisondor.agency",
      subject: "Votre message est bien arrivé",
      html: `
        <!doctype html>
        <html lang="fr">
          <body style="margin: 0; padding: 0; background-color: #F7F5F0;">
            <div
              style="
                max-width: 640px;
                margin: 0 auto;
                padding: 56px 24px;
                font-family: Arial, Helvetica, sans-serif;
                color: #1E1E1E;
                line-height: 1.8;
              "
            >
              <div
                style="
                  background-color: #FFFFFF;
                  padding: 48px 40px;
                  border: 1px solid #E8E3DA;
                "
              >
                <p style="margin: 0 0 26px;">
                  Bonjour ${prenomSecurise},
                </p>

                <p style="margin: 0 0 26px;">
                  Merci d’avoir pris le temps de nous écrire.
                </p>

                <p style="margin: 0 0 26px;">
                  Nous avons bien reçu votre message et allons prendre le temps
                  de découvrir votre projet avec toute l’attention qu’il mérite.
                </p>

                <p style="margin: 0 0 26px;">
                  Toute collaboration commence par une écoute sincère. C’est
                  pourquoi chaque demande est lue personnellement, avant de
                  donner lieu à un échange construit et réfléchi.
                </p>

                <p style="margin: 0 0 26px;">
                  Nous reviendrons vers vous dans un délai de 24 à 48 heures
                  afin de poursuivre cette première conversation.
                </p>

                <p style="margin: 0 0 32px;">
                  Dans l’attente de notre échange, nous vous remercions pour
                  votre confiance.
                </p>

                <p style="margin: 0 0 30px;">
                  Avec considération,
                </p>

                <div style="margin: 0 0 28px;">
                  <div
                    style="
                      color: ${COULEUR_OR};
                      font-size: 20px;
                      font-weight: 400;
                      letter-spacing: 0.02em;
                      line-height: 1.35;
                    "
                  >
                    Toison d’Or
                  </div>

                  <div
                    style="
                      color: ${COULEUR_OR};
                      margin-top: 3px;
                      font-size: 13px;
                      font-weight: 400;
                      letter-spacing: 0.08em;
                      line-height: 1.5;
                    "
                  >
                    Maison de création
                  </div>
                </div>

                <div
                  style="
                    color: #66615A;
                    font-size: 13px;
                    line-height: 1.8;
                  "
                >
                  <a
                    href="mailto:bonjour@toisondor.agency"
                    style="
                      color: #66615A;
                      text-decoration: none;
                    "
                  >
                    bonjour@toisondor.agency
                  </a>

                  <br />

                  <a
                    href="https://toisondor.agency"
                    style="
                      color: #66615A;
                      text-decoration: none;
                    "
                  >
                    toisondor.agency
                  </a>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
Bonjour ${prenom},

Merci d’avoir pris le temps de nous écrire.

Nous avons bien reçu votre message et allons prendre le temps de découvrir votre projet avec toute l’attention qu’il mérite.

Toute collaboration commence par une écoute sincère. C’est pourquoi chaque demande est lue personnellement, avant de donner lieu à un échange construit et réfléchi.

Nous reviendrons vers vous dans un délai de 24 à 48 heures afin de poursuivre cette première conversation.

Dans l’attente de notre échange, nous vous remercions pour votre confiance.

Avec considération,

Toison d’Or
Maison de création

bonjour@toisondor.agency
toisondor.agency
      `.trim(),
    });

    if (confirmation.error) {
      console.error(
        "Erreur Resend lors de l’envoi de la confirmation :",
        confirmation.error
      );

      /*
       * La demande est déjà arrivée chez Toison d'Or.
       * On ne demande donc pas au visiteur de renvoyer son formulaire.
       */
      return NextResponse.json({
        success: true,
        message: "Votre message a bien été envoyé.",
      });
    }

    return NextResponse.json({
      success: true,
      message: "Votre message a bien été envoyé.",
    });
  } catch (error) {
    console.error("Erreur de la route contact :", error);

    return NextResponse.json(
      {
        success: false,
        message: "Une erreur est survenue. Veuillez réessayer.",
      },
      { status: 500 }
    );
  }
}
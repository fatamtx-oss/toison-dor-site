"use client";

import { motion } from "framer-motion";
import Accordion, {
  type AccordionItem,
} from "./Accordion";

const questions: AccordionItem[] = [
  {
    id: "accompagnement",
    question: "Comment pouvez-vous nous accompagner ?",
    answer: (
      <div className="space-y-5">
        <p>
          Chaque projet possède sa propre nuance, son histoire
          et sa manière d&apos;être raconté. C&apos;est pourquoi
          notre accompagnement est toujours individuel.
        </p>

        <p>
          Nous prenons le temps de comprendre votre parcours,
          votre métier et vos aspirations afin de vous proposer
          une démarche qui vous ressemble.
        </p>

        <p>
          Qu&apos;il s&apos;agisse de créer une identité
          visuelle, un site internet, des supports de
          communication ou de vous accompagner plus largement
          dans le développement de votre image, notre objectif
          reste le même&nbsp;: révéler ce qui rend votre maison
          unique.
        </p>

        <div className="grid gap-4 pt-3 sm:grid-cols-2">
          {[
            {
              title: "Identité visuelle",
              text: "Logo, univers graphique, couleurs, typographies et règles d’utilisation.",
            },
            {
              title: "Présence digitale",
              text: "Site internet, expérience utilisateur et déclinaisons numériques.",
            },
            {
              title: "Supports de communication",
              text: "Papeterie, brochures, présentations, affiches et contenus éditoriaux.",
            },
            {
              title: "Accompagnement global",
              text: "Réflexion stratégique, direction artistique et déploiement de votre image.",
            },
          ].map((service) => (
            <div
              key={service.title}
              className="border border-[#C9A35B]/20 bg-[#FBF8F1] p-5 sm:p-6"
            >
              <p className="font-serif text-[1.1rem] text-[#2F2C28]">
                {service.title}
              </p>

              <p className="mt-2 text-[14px] leading-7 text-[#6E655B]">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  {
    id: "premiere-rencontre",
    question: "Notre première rencontre est-elle payante ?",
    answer: (
      <div className="space-y-5">
        <p>
          Non. La première rencontre est offerte et ne vous
          engage à rien.
        </p>

        <p>
          Cet échange nous permet de découvrir votre activité,
          de comprendre votre situation et d&apos;identifier les
          besoins auxquels nous pourrions répondre.
        </p>

        <div className="border-l border-[#C9A35B] bg-[#FBF8F1] px-5 py-4 sm:px-6">
          <p className="font-serif text-[1.05rem] leading-7 text-[#2F2C28]">
            Durée indicative&nbsp;: entre 45 et 60 minutes.
          </p>

          <p className="mt-2 text-[14px] leading-7 text-[#6E655B]">
            La rencontre peut avoir lieu par visioconférence,
            par téléphone ou en personne, selon votre lieu et
            vos disponibilités.
          </p>
        </div>

        <p>
          À la suite de cet échange, nous vous adressons une
          proposition claire précisant le périmètre du projet,
          les livrables, le calendrier estimé et le budget.
        </p>
      </div>
    ),
  },

  {
    id: "debut-activite",
    question:
      "Je débute mon activité. Est-ce le bon moment pour travailler ensemble ?",
    answer: (
      <div className="space-y-5">
        <p>
          Oui. Le lancement d&apos;une activité est souvent le
          meilleur moment pour poser des fondations cohérentes.
        </p>

        <p>
          Il n&apos;est pas nécessaire que tout soit déjà défini.
          Nous pouvons vous aider à clarifier votre
          positionnement, votre message et l&apos;image que vous
          souhaitez transmettre avant de commencer la création.
        </p>

        <div className="grid gap-3 pt-2 sm:grid-cols-3">
          {[
            {
              number: "01",
              title: "Clarifier",
              text: "Votre activité, votre public et votre différence.",
            },
            {
              number: "02",
              title: "Construire",
              text: "Une identité professionnelle et cohérente.",
            },
            {
              number: "03",
              title: "Déployer",
              text: "Les outils réellement nécessaires au lancement.",
            },
          ].map((step) => (
            <div
              key={step.number}
              className="border-t border-[#C9A35B]/40 pt-4"
            >
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#A18454]">
                {step.number}
              </span>

              <p className="mt-3 font-serif text-[1.05rem] text-[#2F2C28]">
                {step.title}
              </p>

              <p className="mt-2 text-[14px] leading-7 text-[#6E655B]">
                {step.text}
              </p>
            </div>
          ))}
        </div>

        <p>
          Lorsque le budget est encore limité, nous pouvons
          également définir une première étape essentielle, puis
          faire évoluer votre univers au rythme de votre
          activité.
        </p>
      </div>
    ),
  },

  {
    id: "besoins",
    question:
      "Je ne sais pas exactement ce dont j’ai besoin. Pouvez-vous m’aider ?",
    answer: (
      <div className="space-y-5">
        <p>
          Oui. Vous n&apos;avez pas besoin d&apos;arriver avec un
          cahier des charges entièrement défini.
        </p>

        <p>
          Notre rôle consiste aussi à vous aider à faire le tri
          entre ce qui est indispensable aujourd&apos;hui, ce qui
          peut attendre et ce qui ne serait pas réellement utile
          à votre projet.
        </p>

        <div className="overflow-hidden border border-[#C9A35B]/20">
          <div className="grid bg-[#EEE7DA] px-5 py-3 text-[10px] uppercase tracking-[0.16em] text-[#756957] sm:grid-cols-[0.85fr_1.15fr]">
            <span>Votre situation</span>
            <span className="hidden sm:block">
              Ce que nous clarifions ensemble
            </span>
          </div>

          {[
            [
              "Une idée encore floue",
              "Le positionnement, la cible et le message principal.",
            ],
            [
              "Une image devenue incohérente",
              "Les éléments à conserver, à améliorer ou à repenser.",
            ],
            [
              "Trop de besoins à la fois",
              "Les priorités, les étapes et le budget adapté.",
            ],
          ].map(([situation, clarification]) => (
            <div
              key={situation}
              className="grid gap-2 border-t border-[#C9A35B]/15 px-5 py-4 sm:grid-cols-[0.85fr_1.15fr] sm:gap-8"
            >
              <p className="font-medium text-[#3A352F]">
                {situation}
              </p>

              <p className="text-[#6E655B]">
                {clarification}
              </p>
            </div>
          ))}
        </div>

        <p>
          La première recommandation n&apos;est donc pas
          nécessairement de créer davantage, mais de comprendre
          ce qui donnera le plus de sens et de cohérence à votre
          présence.
        </p>
      </div>
    ),
  },

  {
    id: "accompagnement-complet",
    question:
      "Que comprend un accompagnement complet ?",
    answer: (
      <div className="space-y-6">
        <p>
          Un accompagnement complet réunit la réflexion
          stratégique, la création de votre identité et son
          déploiement sur les supports nécessaires à votre
          activité.
        </p>

        <div className="overflow-x-auto border border-[#C9A35B]/20">
          <table className="min-w-[700px] w-full border-collapse text-left">
            <thead className="bg-[#EEE7DA]">
              <tr>
                <th className="px-5 py-4 text-[10px] font-medium uppercase tracking-[0.16em] text-[#756957]">
                  Étape
                </th>

                <th className="px-5 py-4 text-[10px] font-medium uppercase tracking-[0.16em] text-[#756957]">
                  Ce qu&apos;elle comprend
                </th>

                <th className="px-5 py-4 text-[10px] font-medium uppercase tracking-[0.16em] text-[#756957]">
                  Résultat
                </th>
              </tr>
            </thead>

            <tbody>
              {[
                {
                  step: "Fondations",
                  includes:
                    "Échange, analyse, positionnement, intention et direction.",
                  result:
                    "Une vision claire avant de commencer à créer.",
                },
                {
                  step: "Identité",
                  includes:
                    "Logo, palette, typographies, compositions et univers graphique.",
                  result:
                    "Une image reconnaissable, cohérente et durable.",
                },
                {
                  step: "Déploiement",
                  includes:
                    "Site internet, papeterie, documents ou supports adaptés.",
                  result:
                    "Une présence prête à être utilisée au quotidien.",
                },
                {
                  step: "Transmission",
                  includes:
                    "Fichiers finaux, recommandations et guide d’utilisation.",
                  result:
                    "Une identité que vous pouvez faire vivre avec autonomie.",
                },
              ].map((row) => (
                <tr
                  key={row.step}
                  className="border-t border-[#C9A35B]/15 align-top"
                >
                  <td className="px-5 py-5 font-serif text-[1rem] text-[#2F2C28]">
                    {row.step}
                  </td>

                  <td className="px-5 py-5 text-[14px] leading-7 text-[#6E655B]">
                    {row.includes}
                  </td>

                  <td className="px-5 py-5 text-[14px] leading-7 text-[#6E655B]">
                    {row.result}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          Le contenu exact reste toujours ajusté à votre projet.
          Nous ne vous imposons pas une formule standardisée ni
          des livrables dont vous n&apos;auriez pas l&apos;usage.
        </p>
      </div>
    ),
  },  {
    id: "photo-video",
    question:
      "Réalisez-vous également des photographies et des vidéos ?",
    answer: (
      <div className="space-y-5">
        <p>
          Oui, lorsque le projet le nécessite. Les photographies
          et les vidéos permettent de donner vie à votre identité
          et de raconter votre activité avec authenticité.
        </p>

        <p>
          Selon les besoins, nous réalisons les prises de vues
          nous-mêmes ou nous collaborons avec des partenaires
          spécialisés partageant la même exigence de qualité.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="border border-[#C9A35B]/20 bg-[#FBF8F1] p-5">
            <p className="font-serif text-[#2F2C28]">
              Photographie
            </p>

            <p className="mt-2 text-[14px] leading-7 text-[#6E655B]">
              Portraits, architecture, produits,
              artisanat, reportages et images de marque.
            </p>
          </div>

          <div className="border border-[#C9A35B]/20 bg-[#FBF8F1] p-5">
            <p className="font-serif text-[#2F2C28]">
              Vidéo
            </p>

            <p className="mt-2 text-[14px] leading-7 text-[#6E655B]">
              Films de présentation, réseaux sociaux,
              interviews ou contenus immersifs.
            </p>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: "reseaux",
    question:
      "Proposez-vous la gestion des réseaux sociaux ?",
    answer: (
      <div className="space-y-5">
        <p>
          Oui, mais uniquement lorsqu'elle s'inscrit dans une
          stratégie cohérente.
        </p>

        <p>
          Nous privilégions une présence maîtrisée plutôt qu'une
          publication permanente. Chaque contenu doit avoir une
          intention.
        </p>

        <div className="border-l border-[#C9A35B] bg-[#FBF8F1] px-5 py-4">
          <p className="font-serif text-[#2F2C28]">
            Créer avec sens.
          </p>

          <p className="mt-2 text-[14px] leading-7 text-[#6E655B]">
            Nous préférons quelques publications utiles à une
            communication abondante sans véritable impact.
          </p>
        </div>
      </div>
    ),
  },

  {
    id: "impression",
    question:
      "Prenez-vous en charge l'impression des supports ?",
    answer: (
      <div className="space-y-5">
        <p>
          Oui. Nous pouvons coordonner l'impression de vos
          différents supports auprès de partenaires de confiance.
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          {[
            "Cartes de visite",
            "Papeterie",
            "Brochures",
            "Dépliants",
            "Affiches",
            "Signalétique",
          ].map((item) => (
            <div
              key={item}
              className="border border-[#C9A35B]/20 px-5 py-4"
            >
              {item}
            </div>
          ))}
        </div>

        <p>
          Nous vérifions les fichiers avant impression afin de
          garantir un résultat fidèle au projet.
        </p>
      </div>
    ),
  },

  {
    id: "delais",
    question:
      "Combien de temps faut-il pour réaliser un projet ?",
    answer: (
      <div className="space-y-6">
        <p>
          Chaque projet possède son propre rythme. Les délais
          ci-dessous donnent un ordre d'idée.
        </p>

        <div className="overflow-x-auto border border-[#C9A35B]/20">
          <table className="min-w-full border-collapse">
            <thead className="bg-[#EEE7DA]">
              <tr>
                <th className="px-5 py-4 text-left text-[10px] uppercase tracking-[0.18em]">
                  Projet
                </th>

                <th className="px-5 py-4 text-left text-[10px] uppercase tracking-[0.18em]">
                  Délai moyen
                </th>
              </tr>
            </thead>

            <tbody>
              {[
                ["Identité essentielle", "2 à 3 semaines"],
                ["Identité complète", "4 à 6 semaines"],
                ["Site internet", "6 à 10 semaines"],
                ["Accompagnement global", "Selon le projet"],
              ].map(([title, delay]) => (
                <tr
                  key={title}
                  className="border-t border-[#C9A35B]/15"
                >
                  <td className="px-5 py-5 font-serif">
                    {title}
                  </td>

                  <td className="px-5 py-5">
                    {delay}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          Un calendrier précis est toujours communiqué avant le
          début du projet.
        </p>
      </div>
    ),
  },

  {
    id: "tarifs",
    question:
      "Quels sont vos tarifs ?",
    answer: (
      <div className="space-y-6">
        <p>
          Chaque accompagnement est construit sur mesure. Les
          montants ci-dessous sont des repères destinés à vous
          aider à situer votre projet.
        </p>

        <div className="overflow-x-auto border border-[#C9A35B]/20">
          <table className="min-w-[760px] w-full border-collapse">
            <thead className="bg-[#EEE7DA]">
              <tr>
                <th className="px-5 py-4 text-left text-[10px] uppercase tracking-[0.16em]">
                  Accompagnement
                </th>

                <th className="px-5 py-4 text-left text-[10px] uppercase tracking-[0.16em]">
                  À partir de
                </th>

                <th className="px-5 py-4 text-left text-[10px] uppercase tracking-[0.16em]">
                  Comprend
                </th>
              </tr>
            </thead>

            <tbody>
              {[
                [
                  "Première empreinte",
                  "CHF 1'200",
                  "Logo • palette • typographies",
                ],
                [
                  "Identité complète",
                  "CHF 2'800",
                  "Stratégie • identité • guide",
                ],
                [
                  "Accompagnement global",
                  "Sur devis",
                  "Planning personnalisé",
                ],
              ].map(([name, price, include]) => (
                <tr
                  key={name}
                  className="border-t border-[#C9A35B]/15"
                >
                  <td className="px-5 py-5 font-serif">
                    {name}
                  </td>

                  <td className="px-5 py-5">
                    {price}
                  </td>

                  <td className="px-5 py-5">
                    {include}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          Après notre première rencontre, vous recevez un devis
          détaillé sans engagement.
        </p>
      </div>
    ),
  },  {
    id: "paiement",
    question: "À quel moment le paiement est-il demandé ?",
    answer: (
      <div className="space-y-6">
        <p>
          Afin de réserver le temps consacré à votre projet, un
          acompte est demandé au démarrage. Le solde est réglé à
          la livraison des éléments convenus.
        </p>

        <div className="grid gap-4 sm:grid-cols-4">
          {[
            {
              title: "Validation",
              text: "Acceptation du devis",
            },
            {
              title: "50 %",
              text: "Début du projet",
            },
            {
              title: "Création",
              text: "Échanges et ajustements",
            },
            {
              title: "50 %",
              text: "Livraison finale",
            },
          ].map((step, index) => (
            <div
              key={step.title}
              className="relative border border-[#C9A35B]/20 bg-[#FBF8F1] p-5"
            >
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#A18454]">
                0{index + 1}
              </span>

              <p className="mt-3 font-serif text-[#2F2C28]">
                {step.title}
              </p>

              <p className="mt-2 text-[14px] leading-7 text-[#6E655B]">
                {step.text}
              </p>
            </div>
          ))}
        </div>

        <p>
          Pour les projets plus importants, un échéancier peut
          naturellement être mis en place.
        </p>
      </div>
    ),
  },

  {
    id: "etapes",
    question:
      "Peut-on avancer étape par étape ?",
    answer: (
      <div className="space-y-5">
        <p>
          Oui. Tous les projets n'ont pas besoin d'être réalisés
          en une seule fois.
        </p>

        <p>
          Nous pouvons commencer par les fondations
          indispensables puis développer progressivement votre
          univers de marque au rythme de votre activité.
        </p>

        <div className="border-l border-[#C9A35B] pl-6">
          <p>Identité</p>
          <p className="mt-3">↓</p>
          <p className="mt-3">Site internet</p>
          <p className="mt-3">↓</p>
          <p className="mt-3">Supports imprimés</p>
          <p className="mt-3">↓</p>
          <p className="mt-3">Développement continu</p>
        </div>
      </div>
    ),
  },

  {
    id: "suisse",
    question:
      "Travaillez-vous uniquement en Suisse ?",
    answer: (
      <div className="space-y-5">
        <p>
          Non.
        </p>

        <p>
          Bien que Toison d'Or soit implantée en Suisse, nous
          accompagnons également des entreprises et des
          indépendants dans d'autres pays.
        </p>

        <p>
          Les échanges peuvent se dérouler à distance ou en
          présentiel selon le projet.
        </p>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="border border-[#C9A35B]/20 p-5">
            🇨🇭 Suisse
          </div>

          <div className="border border-[#C9A35B]/20 p-5">
            🇫🇷 France
          </div>

          <div className="border border-[#C9A35B]/20 p-5">
            🌍 International
          </div>
        </div>

        <p>
          Nous travaillons principalement en français, mais
          également en espagnol et en albanais.
        </p>
      </div>
    ),
  },

  {
    id: "pourquoi",
    question:
      "Pourquoi choisir Toison d'Or ?",
    answer: (
      <div className="space-y-6">
        <p>
          Parce que nous croyons qu'une identité ne se résume pas
          à un logo ou à un site internet.
        </p>

        <div className="grid gap-5 sm:grid-cols-2">
          {[
            "Une approche sur mesure.",
            "Une direction artistique cohérente.",
            "Un accompagnement humain.",
            "Une recherche du sens avant la forme.",
          ].map((item) => (
            <div
              key={item}
              className="border border-[#C9A35B]/20 bg-[#FBF8F1] p-6"
            >
              <p className="font-serif text-[#2F2C28]">
                {item}
              </p>
            </div>
          ))}
        </div>

        <p>
          Nous cherchons à construire une image durable, fidèle à
          votre histoire et capable d'évoluer avec vous.
        </p>
      </div>
    ),
  },

  {
    id: "deroulement",
    question:
      "Comment se déroule un accompagnement ?",
    answer: (
      <div className="space-y-6">
        <p>
          Chaque projet est différent, mais notre méthode suit
          toujours une progression claire.
        </p>

        <div className="grid gap-5 md:grid-cols-5">
          {[
            "Rencontre",
            "Réflexion",
            "Création",
            "Présentation",
            "Déploiement",
          ].map((step, index) => (
            <div
              key={step}
              className="text-center"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#C9A35B]/40 font-serif text-[#8D6A31]">
                {index + 1}
              </div>

              <p className="mt-4 font-serif text-[#2F2C28]">
                {step}
              </p>
            </div>
          ))}
        </div>

        <p>
          Nous restons présents après la livraison afin de vous
          accompagner dans la mise en œuvre de votre nouvelle
          identité.
        </p>
      </div>
    ),
  },
];

export default function Questions() {
  return (
    <section
      id="questions"
      className="bg-[#F5F1E8] py-28 sm:py-36"
    >
      <div className="mx-auto max-w-[1100px] px-6 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-20"
        >
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#A18454]">
            Questions
          </span>

          <h2 className="mt-5 font-serif text-5xl leading-tight text-[#1E1E1E]">
            Avant notre rencontre
          </h2>

          <p className="mt-8 max-w-3xl text-[17px] leading-9 text-[#6E655B]">
            Choisir une maison de création est une décision
            importante. Cette page rassemble les questions que
            l'on nous pose le plus souvent afin de vous aider à
            comprendre notre manière de travailler avant notre
            première rencontre.
          </p>
        </motion.div>

        <Accordion
          items={questions}
          defaultOpenId="accompagnement"
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-28 border-t border-[#C9A35B]/20 pt-16 text-center"
        >
          <h3 className="font-serif text-4xl text-[#1E1E1E]">
            La suite s'écrira ensemble.
          </h3>

          <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-9 text-[#6E655B]">
            Si vous ne trouvez pas la réponse à votre question,
            nous serons heureux d'en discuter lors d'un premier
            échange.
          </p>

          <a
            href="#entrer-en-relation"
            className="mt-12 inline-flex items-center justify-center border border-[#C9A35B] px-8 py-4 text-[11px] uppercase tracking-[0.22em] text-[#2F2C28] transition-all duration-500 hover:bg-[#C9A35B] hover:text-white"
          >
            Entrer en relation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
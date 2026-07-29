const faq = [
  {
    question: "Comment pouvez-vous nous accompagner ?",
    answer:
      "Chaque projet est unique. Nous prenons le temps de comprendre votre activité afin de construire une identité cohérente et durable.",
  },
  {
    question: "Notre première rencontre est-elle payante ?",
    answer:
      "Non. La première rencontre est offerte et permet d'échanger sur votre projet sans engagement.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function FaqStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
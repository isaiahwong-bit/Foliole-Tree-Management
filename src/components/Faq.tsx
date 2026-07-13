import { Plus } from "lucide-react";

const faqs = [
  {
    question: "Which areas do you service?",
    answer:
      "LumberJord services Melbourne's bayside and inner-eastern suburbs: Brighton, Hampton and Sandringham on the bay, and Toorak, Malvern, Armadale, Kew, Canterbury, Camberwell and Hawthorn in the inner east, plus the areas around them. For subcontracting work, Jordan travels across greater Melbourne.",
  },
  {
    question: "Do I need a council permit to prune or remove my tree?",
    answer:
      "Often, yes. The City of Stonnington and City of Boroondara both protect established trees on private land under local laws, and parts of Bayside carry vegetation protection overlays, so permits are a routine part of tree work in these areas. Jordan identifies what applies to your tree as part of quoting and can supply the arborist detail councils ask for.",
  },
  {
    question: "What's the difference between an arborist and a tree lopper?",
    answer:
      "Training and standards. A qualified arborist has formal certification in arboriculture, works to Australian Standard AS 4373 for pruning, and makes cuts based on tree biology, so the tree stays healthy and structurally sound. Lopping, indiscriminate cutting between branch unions, weakens trees, triggers unstable regrowth, and usually costs more to correct later than doing it properly would have.",
  },
  {
    question: "How much does tree work cost?",
    answer:
      "It depends on the tree's size, condition, access and how close it stands to structures: a confined-space removal over a house is a different job from the same tree in an open paddock. Quotes are free and obligation-free: send a few photos through the quote form or call 0413 268 827, and Jordan will give you a clear price before any work is booked.",
  },
  {
    question: "Are you insured?",
    answer:
      "Yes. LumberJord carries comprehensive public liability insurance, and every job is run under disciplined safety protocols. Documentation is available on request, including for subcontracting and council work.",
  },
  {
    question: "Can you tell me what species my tree is?",
    answer:
      "Yes. Attach a couple of photos to the quote form (the whole tree plus a close-up of leaves or bark is ideal) and Jordan will identify it and explain what he'd look at in person. The tree guide on this site also covers the species he works with most across Melbourne's south east.",
  },
];

export default function Faq() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section id="faq" className="py-24 lg:py-36 relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-5xl font-bold text-navy leading-tight tracking-tight text-balance">
            Common questions
          </h2>
          <p className="mt-6 text-lg text-navy/70 leading-relaxed">
            Straight answers to the things people ask most. Anything else,{" "}
            <a
              href="#contact"
              className="text-orange-dark hover:text-orange underline underline-offset-2 transition-colors"
            >
              just ask
            </a>
            .
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group rounded-xl bg-white border border-navy/10 open:border-orange/40 transition-colors"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-5 sm:px-6 py-4 sm:py-5 [&::-webkit-details-marker]:hidden">
                <span className="font-semibold text-navy text-sm sm:text-base">
                  {faq.question}
                </span>
                <Plus
                  size={18}
                  className="text-orange flex-shrink-0 transition-transform duration-300 group-open:rotate-45"
                  aria-hidden="true"
                />
              </summary>
              <p className="px-5 sm:px-6 pb-5 text-sm sm:text-base text-navy/70 leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

import { ArrowDown, Brain, Eye, LineChart } from "lucide-react";

const capabilities = [
  {
    icon: Brain,
    title: "American Girl-Specific SLM + Simulated Shopping Journeys",
    paragraphs: [
      "Cimulate builds a commerce-specific Small Language Model (SLM) for American Girl, using its catalog and simulated shopping journeys to learn how shoppers discover, compare, and choose products.",
      "The model understands intent from the start, whether someone wants a first doll, a favorite character, or a gift for an eight-year-old. Simulated journeys help establish relevance for new products and when shopper history is limited.",
      "Merchandisers can spend less time defining individual queries and adjusting ranking weights.",
    ],
  },
  {
    icon: Eye,
    title: "Computer Vision + Query Rewriting",
    paragraphs: [
      "Computer vision extracts colors, patterns, and styles directly from product imagery, enriching catalog descriptions.",
      "Query rewriting helps interpret unfamiliar terms, cultural references, and emerging trends. The SLM can consult external large language models in real time to translate a phrase into product concepts.",
    ],
    example: true,
  },
  {
    icon: LineChart,
    title: "Real Shopper Behavior + Conversion Optimization",
    paragraphs: [
      "Cimulate’s commerce-specific model establishes which products are relevant. Clicks, add-to-carts, and purchases then help the system learn which relevant products are most likely to convert.",
      "The system uses those signals to order relevant products, reducing the need for manual ranking adjustments.",
    ],
  },
];

function QueryRewriteExample() {
  return (
    <div className="mt-5 rounded-xl border bg-secondary p-4">
      <p className="eyebrow text-primary">Illustrative query rewrite</p>
      <dl className="mt-3 space-y-2 text-sm">
        <div>
          <dt className="text-xs text-muted-foreground">Shopper searches</dt>
          <dd className="font-semibold">“Labubu outfit for my doll”</dd>
        </div>
        <div>
          <dt className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <ArrowDown className="size-3.5 text-primary" aria-hidden="true" /> Query interpretation
          </dt>
          <dd className="font-semibold">“Monster-inspired doll clothing”</dd>
        </div>
      </dl>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        If American Girl carries items with those characteristics, the rewrite can help shoppers
        find them without manually adding synonyms for each new trend.
      </p>
    </div>
  );
}

export function Understanding() {
  return (
    <section id="technology" className="mx-auto max-w-7xl px-6 py-24">
      <div className="reveal max-w-4xl">
        <h2 className="text-4xl font-semibold md:text-5xl">
          Not Just Product Matching. <span className="text-gradient">Shopper Understanding.</span>
        </h2>
      </div>
      <div className="reveal mt-10 grid gap-4 lg:grid-cols-3">
        {capabilities.map(({ icon: Icon, title, paragraphs, example }) => (
          <article key={title} className="rounded-2xl border bg-card p-6 shadow-soft xl:p-7">
            <Icon className="size-6 text-primary" aria-hidden="true" />
            <h3 className="mt-5 text-lg font-semibold">{title}</h3>
            <div className="mt-4 space-y-3 leading-relaxed text-muted-foreground">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            {example && <QueryRewriteExample />}
          </article>
        ))}
      </div>
      <div className="reveal mt-8 rounded-2xl border bg-secondary p-6 md:p-8">
        <h3 className="text-2xl font-semibold md:text-3xl">Keep Shopify. Upgrade Search.</h3>
        <p className="mt-3 max-w-4xl leading-relaxed text-muted-foreground">
          Cimulate integrates with American Girl’s existing Shopify storefront through APIs,
          bringing intent-led product discovery to the shopping experience without requiring a move
          to Salesforce Commerce Cloud or a full platform migration.
        </p>
        <p className="mt-4 font-semibold text-primary">
          Keep the storefront your customers know. Upgrade the intelligence behind search.
        </p>
      </div>
    </section>
  );
}

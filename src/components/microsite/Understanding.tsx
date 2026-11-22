import { ArrowRight, Brain, Eye, LineChart, Link2 } from "lucide-react";

const iconStyle =
  "inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-primary/15 bg-card text-primary";
const cardStyle = "min-w-0 rounded-2xl border p-6 shadow-soft md:p-8";

function QueryRewriteExample({
  label,
  query,
  interpretation,
  explanation,
  featured = false,
}: {
  label: string;
  query: string;
  interpretation: string;
  explanation: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border border-primary/15 p-4 ${featured ? "bg-secondary" : "bg-secondary/35"}`}
    >
      <p className="eyebrow text-primary">{label}</p>
      <dl className="mt-3 grid gap-3 text-sm min-[480px]:grid-cols-2 xl:grid-cols-1">
        <div>
          <dt className="text-xs text-muted-foreground">Shopper searches</dt>
          <dd className="mt-1 font-semibold">“{query}”</dd>
        </div>
        <div className="border-t border-primary/15 pt-2 min-[480px]:border-l min-[480px]:border-t-0 min-[480px]:pl-3 min-[480px]:pt-0 xl:border-t xl:border-l-0 xl:pt-2 xl:pl-0">
          <dt className="flex items-baseline gap-1.5 text-xs text-muted-foreground">
            <ArrowRight className="size-3 shrink-0 text-primary" aria-hidden="true" /> Query
            interpretation
          </dt>
          <dd className="mt-1 font-semibold">“{interpretation}”</dd>
        </div>
      </dl>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{explanation}</p>
    </div>
  );
}

export function Understanding() {
  return (
    <section id="technology" className="mx-auto max-w-7xl px-6 py-24">
      <div className="reveal max-w-4xl">
        <h2 className="text-3xl font-semibold sm:text-4xl md:text-5xl">
          Not Just Product Matching. <span className="text-gradient">Shopper Understanding.</span>
        </h2>
      </div>

      <div className="reveal mt-8 space-y-4 md:mt-10">
        <article
          className={`${cardStyle} border-primary/15 bg-linear-to-br from-secondary to-card`}
        >
          <div className="flex items-start gap-3 sm:items-center">
            <span className={iconStyle}>
              <Brain className="size-5" aria-hidden="true" />
            </span>
            <h3 className="text-xl leading-snug font-semibold md:text-2xl">
              An AI Model Built for American Girl. Trained to Understand How Shoppers Shop.
            </h3>
          </div>
          <div className="mt-5 grid gap-5 leading-relaxed text-muted-foreground md:grid-cols-[1.18fr_1fr] md:gap-8">
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Understand the Shopper</h4>
              <p>
                Cimulate builds a commerce-specific Small Language Model (SLM) tailored to American
                Girl’s catalog, characters, and collections. It understands the shopping mission
                behind the words, from a first doll or a gift for an eight-year-old to a favorite
                character or a matching outfit.
              </p>
            </div>
            <div className="space-y-3 rounded-xl border border-primary/15 bg-card/65 p-4">
              <h4 className="font-semibold text-foreground">Simulate the Shopping Journey</h4>
              <p>
                Millions of simulated shopping journeys model how families search, explore, compare,
                and choose products. The model learns how a gift, character, or outfit search can
                lead to a purchase, helping it connect shoppers with relevant products and
                collections even before there’s much real shopping history.
              </p>
            </div>
          </div>
          <p className="mt-5 border-t border-primary/15 pt-4 text-sm font-semibold text-primary">
            Relevant results from the start, informed by how families discover and choose products.
          </p>
        </article>

        <div className="grid items-start gap-4 lg:grid-cols-2 xl:grid-cols-[1.28fr_1fr]">
          <article className={`${cardStyle} bg-card`}>
            <span className={iconStyle}>
              <Eye className="size-5" aria-hidden="true" />
            </span>
            <h3 className="mt-4 text-xl font-semibold">Computer Vision + Query Rewriting</h3>
            <div className="mt-3 space-y-3 leading-relaxed text-muted-foreground">
              <p>
                Computer vision extracts colors, patterns, styles, and design details directly from
                product imagery, adding details the catalog feed may leave out.
              </p>
              <p>
                Query rewriting helps interpret unfamiliar language, cultural references, and
                emerging trends. The SLM can consult external large language models in real time to
                translate unfamiliar phrases into product concepts.
              </p>
            </div>
            <div className="mt-5 grid gap-3 xl:grid-cols-2">
              <QueryRewriteExample
                featured
                label="Real-world example — beauty retailer"
                query="Taylor Swift lipstick"
                interpretation="Bright red lipstick"
                explanation="At a beauty retailer, Cimulate interpreted the Taylor Swift reference and translated it into the product attribute the shopper was seeking."
              />
              <QueryRewriteExample
                label="Illustrative American Girl example"
                query="Labubu outfit for my doll"
                interpretation="Monster-inspired doll clothing"
                explanation="If American Girl carries outfits with these characteristics, the rewrite could help shoppers find them without manually adding synonyms for each new trend."
              />
            </div>
          </article>

          <article className={`${cardStyle} bg-card`}>
            <span className={iconStyle}>
              <LineChart className="size-5" aria-hidden="true" />
            </span>
            <h3 className="mt-4 text-xl font-semibold">
              Real Shopper Behavior. Smarter Product Ordering.
            </h3>
            <div className="mt-3 space-y-3 leading-relaxed text-muted-foreground">
              <p>
                Simulated journeys give American Girl’s model a foundation for understanding shopper
                intent and identifying relevant products from the start.
              </p>
              <p>
                Clicks, product exploration, add-to-carts, and purchases feed back into the same
                model. That activity builds on what the model learned in simulation, helping it
                order relevant products by what shoppers actually prefer and are most likely to buy.
              </p>
            </div>
            <p className="mt-5 rounded-xl border border-primary/15 bg-secondary/65 p-4 text-sm font-semibold leading-relaxed text-primary">
              Simulated shopping journeys + real shopper behavior
              <ArrowRight className="mx-2 inline size-4 align-middle" aria-hidden="true" />
              Conversion-focused product ordering
            </p>
          </article>
        </div>

        <div className="flex items-start gap-4 rounded-2xl border border-sky/25 bg-navy px-5 py-5 text-navy-foreground shadow-soft sm:px-7">
          <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-sky/30 bg-sky/10 text-sky">
            <Link2 className="size-5" aria-hidden="true" />
          </span>
          <div>
            <h3 className="text-lg font-semibold md:text-xl">Keep Shopify. Upgrade Search.</h3>
            <p className="mt-1 max-w-4xl text-sm leading-relaxed text-navy-muted md:text-base">
              Cimulate integrates with American Girl’s existing Shopify storefront through APIs,
              bringing intent-led, AI-powered search to the storefront without requiring a move to
              Salesforce Commerce Cloud or a full platform migration.
            </p>
            <p className="mt-2 text-sm font-semibold text-sky">
              Keep the storefront your customers know. Upgrade the intelligence behind search.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

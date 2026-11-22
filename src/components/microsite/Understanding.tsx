import { ArrowRight, Brain, Eye, LineChart, Link2 } from "lucide-react";

const iconStyle =
  "inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-primary/15 bg-card text-primary";
const cardStyle = "min-w-0 rounded-2xl border p-6 shadow-soft md:p-8";

function QueryRewriteExample() {
  return (
    <div className="mt-5 rounded-xl border border-primary/15 bg-secondary/65 p-4">
      <p className="eyebrow text-primary">Illustrative query rewrite</p>
      <dl className="mt-3 grid gap-3 text-sm min-[420px]:grid-cols-2">
        <div>
          <dt className="text-xs text-muted-foreground">Shopper searches</dt>
          <dd className="mt-1 font-semibold">“Labubu outfit for my doll”</dd>
        </div>
        <div className="border-t border-primary/15 pt-2 min-[420px]:border-l min-[420px]:border-t-0 min-[420px]:pl-3 min-[420px]:pt-0">
          <dt className="flex items-baseline gap-1.5 text-xs text-muted-foreground">
            <ArrowRight className="size-3 shrink-0 text-primary" aria-hidden="true" />
            Query interpretation
          </dt>
          <dd className="mt-1 font-semibold">“Monster-inspired doll clothing”</dd>
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
              American Girl-Specific SLM + Simulated Shopping Journeys
            </h3>
          </div>
          <div className="mt-5 grid gap-5 leading-relaxed text-muted-foreground md:grid-cols-[1.18fr_1fr] md:gap-8">
            <div className="space-y-3">
              <p>
                Cimulate builds a commerce-specific Small Language Model (SLM) for American Girl,
                using its product catalog and simulated shopping journeys to learn how shoppers
                discover, compare, and choose products.
              </p>
              <p>
                The model understands intent from the first query, whether a shopper wants a first
                doll, a favorite character, or an age-appropriate gift for an eight-year-old.
              </p>
            </div>
            <div className="space-y-3 border-t border-primary/15 pt-4 md:border-t-0 md:border-l md:pt-0 md:pl-8">
              <p className="font-semibold text-foreground">
                Find relevant products even with limited shopper history
              </p>
              <p>
                Simulated journeys help establish relevance for new products. The model understands
                shopping context, reducing the need to hand-tune ranking weights or define queries
                one by one.
              </p>
            </div>
          </div>
        </article>

        <div className="grid items-start gap-4 lg:grid-cols-2">
          <article className={`${cardStyle} bg-card`}>
            <span className={iconStyle}>
              <Eye className="size-5" aria-hidden="true" />
            </span>
            <h3 className="mt-4 text-xl font-semibold">Computer Vision + Query Rewriting</h3>
            <div className="mt-3 space-y-3 leading-relaxed text-muted-foreground">
              <p>
                Computer vision extracts colors, patterns, and styles directly from product imagery,
                adding details the catalog feed may leave out.
              </p>
              <p>
                Query rewriting helps interpret unfamiliar language, cultural references, and
                emerging trends. The SLM can consult external large language models in real time to
                translate unfamiliar phrases into product concepts.
              </p>
            </div>
            <QueryRewriteExample />
          </article>

          <article className={`${cardStyle} bg-card`}>
            <span className={iconStyle}>
              <LineChart className="size-5" aria-hidden="true" />
            </span>
            <h3 className="mt-4 text-xl font-semibold">
              Real Shopper Behavior + Conversion Optimization
            </h3>
            <dl className="mt-4 grid gap-3 leading-relaxed text-muted-foreground">
              <div className="rounded-xl border border-primary/10 bg-secondary/35 p-4">
                <dt className="font-semibold text-foreground">Establish relevance</dt>
                <dd className="mt-1">
                  Cimulate’s retailer-specific model identifies which products fit the shopper’s
                  intent.
                </dd>
              </div>
              <div className="rounded-xl border border-primary/10 bg-secondary/35 p-4">
                <dt className="font-semibold text-foreground">
                  Order relevant products for conversion
                </dt>
                <dd className="mt-1">
                  Clicks, add-to-carts, and purchases help determine which relevant products should
                  appear first based on conversion likelihood. The system learns from shopper
                  behavior, reducing the need for manual ranking adjustments.
                </dd>
              </div>
            </dl>
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
              bringing intent-led product discovery to the shopping experience without requiring a
              platform migration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

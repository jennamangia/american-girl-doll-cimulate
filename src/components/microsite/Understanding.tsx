import {
  ArrowRight,
  Brain,
  Eye,
  Footprints,
  LineChart,
  Search,
  ShoppingBag,
  Sparkles,
} from "lucide-react";

const capabilities = [
  {
    icon: Brain,
    title: "Commerce-specific SLM",
    description:
      "A retailer-specific language model understands the shopper’s purpose, recipient, and context. “Doll for my 8 year old” is a gift search with an age in mind.",
  },
  {
    icon: Eye,
    title: "Computer vision",
    description:
      "Product imagery reveals colors, patterns, and styles the feed may leave out, like the gold dots on a black dress or the yellow of Belle’s gown.",
  },
  {
    icon: Footprints,
    title: "Simulated shopping journeys",
    description:
      "Simulated discovery and purchase journeys help the model learn how families might find and choose a new character or outfit with limited shopping history.",
  },
  {
    icon: LineChart,
    title: "Real shopper behavior and conversion",
    description:
      "Clicks, product choices, and purchases help the model refine relevance over time, including which companion pets shoppers choose for their dolls.",
  },
];

const flow = [
  { icon: ShoppingBag, title: "Existing Shopify storefront" },
  { icon: Search, title: "Cimulate Search" },
  { icon: Sparkles, title: "More relevant product discovery" },
];

export function Understanding() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="reveal max-w-4xl">
        <h2 className="text-4xl font-semibold md:text-5xl">
          Not Just Product Matching. <span className="text-gradient">Shopper Understanding.</span>
        </h2>
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
          A retailer-specific model learns how shoppers find and choose products. Merchandisers can
          spend less time maintaining manual ranking rules.
        </p>
      </div>
      <div className="reveal mt-10 grid gap-4 sm:grid-cols-2">
        {capabilities.map(({ icon: Icon, title, description }) => (
          <article key={title} className="rounded-2xl border bg-card p-6 shadow-soft md:p-8">
            <Icon className="size-6 text-primary" aria-hidden="true" />
            <h3 className="mt-5 text-xl font-semibold">{title}</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Shopify() {
  return (
    <section className="bg-close py-24 text-navy-foreground">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal max-w-3xl">
          <h2 className="text-4xl font-semibold md:text-5xl">Keep Shopify. Transform Search.</h2>
          <p className="mt-6 text-lg text-navy-muted">
            Cimulate brings AI-powered product discovery to your existing storefront. No commerce
            platform migration required.
          </p>
        </div>
        <ol className="reveal mt-10 grid gap-4 md:grid-cols-3">
          {flow.map(({ icon: Icon, title }, index) => (
            <li
              key={title}
              className="flex items-center gap-4 rounded-2xl border border-sky/25 bg-navy/50 p-5 font-semibold"
            >
              <Icon className="size-6 shrink-0 text-sky" aria-hidden="true" />
              {title}
              {index < flow.length - 1 && (
                <ArrowRight
                  className="ml-auto size-4 shrink-0 rotate-90 text-sky md:rotate-0"
                  aria-hidden="true"
                />
              )}
            </li>
          ))}
        </ol>
        <div className="reveal mt-10 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold">How it connects</h3>
            <p className="mt-3 leading-relaxed text-navy-muted">
              Connect your storefront through headless search APIs and a client SDK. Support search
              with filtering and sorting, faceted navigation, suggestions and autocomplete, and
              category browsing.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">What Cimulate needs</h3>
            <p className="mt-3 leading-relaxed text-navy-muted">
              An existing product feed and shopper activity from your storefront. Cimulate can infer
              product attributes from imagery, use simulated journeys when historical activity is
              limited, and learn from real shopper interactions over time.
            </p>
          </div>
        </div>
        <p className="reveal mt-10 border-t border-sky/25 pt-8 text-xl font-semibold text-sky">
          Keep the storefront your customers know. Upgrade the intelligence behind search.
        </p>
      </div>
    </section>
  );
}

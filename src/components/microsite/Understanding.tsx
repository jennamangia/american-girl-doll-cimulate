import { Brain, Eye, Footprints, LineChart } from "lucide-react";

const capabilities = [
  {
    icon: Brain,
    title: "Commerce-Specific Small Language Model (SLM)",
    paragraphs: [
      "Instead of relying solely on predefined relevance signals and manually weighted algorithms, Cimulate uses a commerce-specific language model trained to understand shopping intent. It learns how products relate to real shopping needs, occasions, and missions.",
      "For American Girl, that means understanding that “doll for my 8 year old” is a gifting mission, not simply a search for products mentioning dolls or eight-year-olds.",
    ],
  },
  {
    icon: Eye,
    title: "Computer Vision",
    paragraphs: [
      "Cimulate uses computer vision technology to extract product attributes directly from catalog imagery, including colors, patterns, materials, and visual styles.",
      "This enriches the product catalog beyond what is explicitly written in the feed, giving the model a deeper understanding of each product. For example, a search for “black dress” can connect to visually relevant products even when the catalog’s written attributes are incomplete.",
    ],
  },
  {
    icon: Footprints,
    title: "Simulated Shopping Journeys",
    paragraphs: [
      "Cimulate generates simulated shopping journeys to help the model learn how shoppers might discover, compare, and purchase products.",
      "Rather than relying exclusively on historical clicks and purchases, these simulated interactions help establish product relevance, including for new products that haven’t accumulated significant shopper behavior.",
      "This is especially relevant when American Girl introduces new dolls, collections, or seasonal merchandise.",
    ],
  },
  {
    icon: LineChart,
    title: "Real Shopper Behavior & Conversion Optimization",
    paragraphs: [
      "Cimulate’s commerce-specific SLM establishes product relevance by understanding shopper intent from the start — without needing months of historical behavioral data.",
      "As shoppers interact with the storefront, behavioral signals such as clicks, add-to-carts, and purchases help the model learn which relevant products are most likely to convert and how to prioritize them in the results.",
      "This allows product ranking to evolve with actual shopper preferences and purchasing behavior, without relying on constant manual adjustments to ranking rules.",
    ],
  },
];

export function Understanding() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="reveal max-w-4xl">
        <h2 className="text-4xl font-semibold md:text-5xl">
          Not Just Product Matching. <span className="text-gradient">Shopper Understanding.</span>
        </h2>
        <div className="mt-6 max-w-3xl space-y-4 text-lg leading-relaxed text-muted-foreground">
          <p>
            Your Shopify storefront powers your ecommerce experience. Cimulate enhances the product
            discovery behind it with a commerce-specific Small Language Model (SLM) built to
            understand what shoppers are actually trying to accomplish.
          </p>
          <p>
            Rather than relying primarily on predefined ranking signals and algorithmic weighting,
            Cimulate leads with shopper intent — understanding the purpose behind a search and
            connecting customers to relevant products. Combined with computer vision, simulated
            shopping journeys, and real shopper behavior, this creates a more intelligent,
            continuously evolving discovery experience.
          </p>
        </div>
      </div>
      <div className="reveal mt-10 grid gap-4 md:grid-cols-2">
        {capabilities.map(({ icon: Icon, title, paragraphs }) => (
          <article key={title} className="rounded-2xl border bg-card p-6 shadow-soft md:p-8">
            <Icon className="size-6 text-primary" aria-hidden="true" />
            <h3 className="mt-5 text-xl font-semibold">{title}</h3>
            <div className="mt-4 space-y-3 leading-relaxed text-muted-foreground">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
      <p className="reveal mt-8 max-w-4xl text-xl font-semibold leading-relaxed">
        Traditional search evaluates signals to rank products. Cimulate learns to understand
        shoppers and the products that fulfill their intent.
      </p>
      <div className="reveal mt-12 rounded-2xl border bg-secondary p-6 md:p-10">
        <h3 className="text-3xl font-semibold md:text-4xl">Keep Shopify. Transform Search.</h3>
        <div className="mt-5 max-w-3xl space-y-3 leading-relaxed text-muted-foreground">
          <p>
            Cimulate brings intent-led, AI-powered search to your existing Shopify storefront —
            without requiring a move to Salesforce Commerce Cloud or a full platform migration.
          </p>
          <p>
            Designed to integrate with your existing ecommerce experience, so you can modernize
            product discovery without rebuilding your storefront.
          </p>
        </div>
        <p className="mt-6 max-w-3xl text-lg font-semibold text-primary">
          Keep the Shopify experience your customers know. Give it a smarter way to understand what
          they’re shopping for.
        </p>
      </div>
    </section>
  );
}

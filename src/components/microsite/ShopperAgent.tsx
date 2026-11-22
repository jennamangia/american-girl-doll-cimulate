import { useRef, useState } from "react";
import { MessageCircle, X, ZoomIn } from "lucide-react";
import { Lightbox } from "./Sections";

const kitPdp = "/images/american-girl/kit-product-page.webp";
const kitAlt =
  "American Girl’s Kit Kittredge product page showing the doll, book and accessories, $175 price, ratings, availability, and purchase button.";

const followUps = [
  {
    question: "What comes with Kit?",
    answer:
      "This set includes the 18-inch Kit doll, the Meet Kit paperback, and accessories including her crocheted hat, compass necklace, and embroidered purse.",
  },
  {
    question: "Explore compatible outfits",
    answer:
      "Kit is an 18-inch American Girl doll. When browsing outfits, look for listings that specify they fit 18-inch American Girl dolls.",
  },
  {
    question: "Compare other dolls",
    answer:
      "Kit’s story is set in 1934. When comparing historical character dolls, consider the recommended age, the story that interests your niece, and what comes with each set.",
  },
];

export function ShopperAgent() {
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState<number | null>(null);
  const [zoom, setZoom] = useState(false);
  const launcher = useRef<HTMLButtonElement>(null);
  const close = useRef<HTMLButtonElement>(null);
  const followUp = selected === null ? null : followUps[selected];

  return (
    <section id="shopper-agent" className="mx-auto max-w-7xl px-6 py-24">
      <div className="reveal max-w-4xl">
        <h2 className="text-4xl font-semibold md:text-5xl">
          Search Helps Shoppers Find It.{" "}
          <span className="text-gradient">Shopper Agent Helps Them Choose It.</span>
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Once a shopper discovers the right doll, Cimulate’s conversational shopping experience can
          help answer product questions, guide gifting decisions, and explore complementary products
          directly within the existing storefront.
        </p>
      </div>
      <figure className="reveal mt-10 overflow-hidden rounded-2xl border bg-card shadow-soft">
        <figcaption className="border-b bg-secondary px-4 py-3 text-sm font-semibold text-primary sm:px-6">
          Illustrative Shopper Agent experience
          <span className="mt-1 block text-xs font-medium text-muted-foreground sm:ml-3 sm:mt-0 sm:inline">
            Captured product page with a scripted conversation
          </span>
        </figcaption>
        <div className="grid items-start lg:grid-cols-[minmax(0,1fr)_22rem]">
          <div>
            <img
              src={kitPdp}
              alt={kitAlt}
              width={1750}
              height={1410}
              className="block h-auto w-full"
              loading="lazy"
            />
            <div className="border-t px-4 py-2 text-right">
              <button
                type="button"
                onClick={() => setZoom(true)}
                className="inline-flex items-center gap-2 rounded px-1 py-1 text-sm font-semibold text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                <ZoomIn className="size-4" aria-hidden="true" /> Enlarge product page
              </button>
            </div>
          </div>
          <div className="self-stretch border-t bg-[#f8eee7] p-4 lg:border-l lg:border-t-0">
            <div
              id="kit-conversation"
              hidden={!open}
              className="overflow-hidden rounded-2xl border border-[#e6d4d8] bg-white text-[#321b26] shadow-soft"
            >
              <header className="flex items-center gap-3 bg-[#a40f45] px-4 py-3 text-white">
                <MessageCircle className="size-5 shrink-0" aria-hidden="true" />
                <div className="flex-1">
                  <h3 className="text-sm font-semibold">Ask about Kit</h3>
                  <p className="text-xs text-white/90">Shopper Agent</p>
                </div>
                <button
                  ref={close}
                  type="button"
                  aria-label="Close Shopper Agent"
                  onClick={() => {
                    setOpen(false);
                    requestAnimationFrame(() => launcher.current?.focus());
                  }}
                  className="rounded-full p-2 hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  <X className="size-4" aria-hidden="true" />
                </button>
              </header>
              <div className="space-y-3 p-4 text-sm leading-relaxed">
                <p className="ml-5 rounded-2xl rounded-tr-sm bg-[#fbe8ef] p-3">
                  <span className="sr-only">Shopper: </span>
                  I’m buying for my 8-year-old niece. Would Kit be a good first doll?
                </p>
                <p className="mr-3 rounded-2xl rounded-tl-sm bg-[#f8eee7] p-3">
                  <span className="sr-only">Shopper Agent: </span>
                  Kit could be a wonderful first doll! She’s part of American Girl’s historical
                  character collection, and her stories take place during the Great Depression. This
                  set includes her doll, book, and accessories, making it a fun way to explore her
                  world through reading and imaginative play.
                </p>
                <div aria-live="polite" className="space-y-2">
                  {followUp && (
                    <>
                      <p className="ml-5 rounded-2xl rounded-tr-sm bg-[#fbe8ef] p-3">
                        <span className="sr-only">Shopper: </span>
                        {followUp.question}
                      </p>
                      <p className="mr-3 rounded-2xl rounded-tl-sm bg-[#f8eee7] p-3">
                        <span className="sr-only">Shopper Agent: </span>
                        {followUp.answer}
                      </p>
                    </>
                  )}
                </div>
                <div
                  className="flex flex-wrap gap-2"
                  role="group"
                  aria-label="Suggested follow-up questions"
                >
                  {followUps.map(({ question }, index) => (
                    <button
                      key={question}
                      type="button"
                      aria-pressed={selected === index}
                      onClick={() => setSelected(index)}
                      className="rounded-full border border-[#a40f45]/30 px-3 py-1.5 text-left text-xs font-semibold text-[#a40f45] hover:bg-[#fbe8ef] focus-visible:outline-2 focus-visible:outline-offset-2 aria-pressed:bg-[#a40f45] aria-pressed:text-white"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            {!open && (
              <button
                ref={launcher}
                type="button"
                aria-expanded={open}
                aria-controls="kit-conversation"
                onClick={() => {
                  setOpen(true);
                  requestAnimationFrame(() => close.current?.focus());
                }}
                className="ml-auto flex items-center gap-2 rounded-full bg-[#a40f45] px-4 py-3 text-sm font-semibold text-white hover:bg-[#861039] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a40f45]"
              >
                <MessageCircle className="size-4" aria-hidden="true" /> Ask about Kit
              </button>
            )}
          </div>
        </div>
      </figure>
      <div className="reveal mt-8 max-w-3xl">
        <p className="text-xl font-semibold">From product discovery to purchase confidence.</p>
        <p className="mt-2 leading-relaxed text-muted-foreground">
          Search connects shoppers to relevant dolls. Shopper Agent helps them explore the details,
          ask questions, and feel confident about their choice.
        </p>
      </div>
      <Lightbox
        src={zoom ? kitPdp : null}
        onClose={() => setZoom(false)}
        label="Enlarged Kit product page"
        alt={kitAlt}
      />
    </section>
  );
}

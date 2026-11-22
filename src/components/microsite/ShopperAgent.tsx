import { useEffect, useRef, useState } from "react";
import { ArrowRight, MessageCircle, RotateCcw, X, ZoomIn } from "lucide-react";
import { Lightbox } from "./Sections";

const kitPdp = "/images/american-girl/kit-product-page.webp";
const kitAlt =
  "American Girl’s Kit Kittredge product page showing the doll, book and accessories, $175 price, ratings, availability, and purchase button.";

const conversation = [
  {
    question: "I'm shopping for my 8-year-old niece. Would Kit be a good first doll?",
    answer:
      "Kit is recommended for ages 8 and up, so she’s a good option for your niece. Her story follows a girl growing up during the Great Depression. Your niece can read about Kit and then imagine adventures of her own.",
  },
  {
    question: "What comes with Kit?",
    answer:
      "The set includes the 18-inch Kit doll in her signature outfit, the Meet Kit paperback, and accessories including her crocheted hat, compass necklace, and embroidered purse.",
  },
  {
    question: "Could she dress Kit in other outfits?",
    answer:
      "Yes. Look for outfits or play accessories labeled for 18-inch American Girl dolls. She could keep Kit’s signature outfit for scenes from the book and change her clothes for stories she makes up.",
  },
  {
    question: "How does Kit compare with other historical dolls?",
    answer:
      "Kit’s story takes place during the Great Depression. Molly’s is set on the home front during World War II, and Samantha’s begins in 1904. Think about which story your niece would be most excited to read and act out.",
  },
  {
    question: "What would you choose for her first doll?",
    answer:
      "I’d start with Kit if your niece likes reading and making up stories. The book gives you something to read together, and the outfit and accessories are enough to start playing right away.",
  },
];

function ChatBubble({ speaker, text }: { speaker: "Shopper" | "Shopper Agent"; text: string }) {
  const shopper = speaker === "Shopper";

  return (
    <p
      className={`w-fit max-w-[92%] rounded-2xl p-3 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-1 motion-safe:duration-300 ${
        shopper ? "ml-auto rounded-tr-sm bg-[#fbe8ef]" : "rounded-tl-sm bg-[#f8eee7]"
      }`}
    >
      <span className="sr-only">{speaker}: </span>
      {text}
    </p>
  );
}

export function ShopperAgent() {
  const [open, setOpen] = useState(true);
  const [visibleTurns, setVisibleTurns] = useState(1);
  const [zoom, setZoom] = useState(false);
  const launcher = useRef<HTMLButtonElement>(null);
  const close = useRef<HTMLButtonElement>(null);
  const transcript = useRef<HTMLDivElement>(null);
  const nextTurn = conversation[visibleTurns];

  useEffect(() => {
    const log = transcript.current;
    if (!log) return;

    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    log.scrollTo?.({
      top: visibleTurns === 1 ? 0 : log.scrollHeight,
      behavior: visibleTurns === 1 || reduceMotion ? "instant" : "smooth",
    });
  }, [visibleTurns]);

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
            Captured product page with a scripted Shopper Agent demonstration
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
              <div
                id="kit-transcript"
                ref={transcript}
                role="log"
                aria-label="Kit conversation history"
                aria-relevant="additions"
                tabIndex={0}
                className="h-[22rem] space-y-3 overflow-y-auto overscroll-contain px-4 py-4 text-sm leading-relaxed [scrollbar-gutter:stable] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#a40f45] lg:h-[30rem]"
              >
                {conversation.slice(0, visibleTurns).map(({ question, answer }) => (
                  <div key={question} className="space-y-3">
                    <ChatBubble speaker="Shopper" text={question} />
                    <ChatBubble speaker="Shopper Agent" text={answer} />
                  </div>
                ))}
              </div>
              <div className="border-t border-[#e6d4d8] px-4 py-3">
                <p className="mb-2 text-xs font-semibold text-[#61434f]" id="kit-prompt-label">
                  {nextTurn ? "Suggested follow-up" : "Conversation complete"}
                </p>
                <button
                  type="button"
                  onClick={() =>
                    setVisibleTurns((turns) => (turns < conversation.length ? turns + 1 : 1))
                  }
                  aria-describedby="kit-prompt-label"
                  aria-controls="kit-transcript"
                  className="inline-flex min-h-10 max-w-full items-center gap-2 rounded-xl border border-[#a40f45]/30 px-3 py-2 text-left text-xs font-semibold text-[#a40f45] hover:bg-[#fbe8ef] focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  {nextTurn ? nextTurn.question : "Replay conversation"}
                  {nextTurn ? (
                    <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
                  ) : (
                    <RotateCcw className="size-4 shrink-0" aria-hidden="true" />
                  )}
                </button>
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

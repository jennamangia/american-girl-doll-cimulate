import { useEffect, useRef, useState } from "react";
import { MessageCircle, Pause, Play, RotateCcw, X, ZoomIn } from "lucide-react";
import { KitOutfitCarousel } from "./KitOutfitCarousel";
import { Lightbox } from "./Sections";

const kitPdp = "/images/american-girl/kit-product-page.webp";
const kitAlt =
  "American Girl’s Kit Kittredge product page showing the doll, book and accessories, $175 price, ratings, availability, and purchase button.";

const exchanges = [
  {
    question: "What comes with Kit?",
    answer:
      "Kit comes with her signature outfit, accessories, and the Meet Kit paperback book. She’s part of American Girl’s historical collection, so her story is just as much a part of the experience as the doll herself!",
  },
  {
    question: "She’s for my niece who’s turning 8. Is Kit a good choice?",
    answer:
      "Absolutely! Kit is designed for ages 8 and up. Her story follows a resourceful girl growing up during the Great Depression. She’s a wonderful choice for someone who loves imaginative play, history, and storytelling.",
  },
  {
    question: "Can she wear other outfits?",
    answer:
      "Yes! Kit is an 18-inch American Girl doll, so she can wear compatible 18-inch doll outfits. Here are a few looks you could explore with her.",
    outfits: true,
  },
  {
    question: "Anything else I should get with her?",
    answer:
      "I’d start with an outfit so your niece can make up adventures right away. Over time, you could add a compatible accessory set or read more of Kit’s story together.",
  },
];

const openingPause = 600;
const messages = exchanges
  .flatMap(({ question, answer, outfits }) => [
    { speaker: "Shopper" as const, text: question, pause: 1800 },
    { speaker: "Shopper Agent" as const, text: answer, pause: outfits ? 8500 : 5500, outfits },
  ])
  .concat({
    speaker: "Shopper Agent",
    text: "Kit is a wonderful starting point. You can build her collection over time as your niece discovers more of her story!",
    pause: 0,
    outfits: false,
  });

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
  const [visibleMessages, setVisibleMessages] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [zoom, setZoom] = useState(false);
  const launcher = useRef<HTMLButtonElement>(null);
  const close = useRef<HTMLButtonElement>(null);
  const transcript = useRef<HTMLDivElement>(null);
  const following = useRef(true);
  const lastTop = useRef(0);
  const complete = visibleMessages === messages.length;
  const typing = open && playing && !zoom && messages[visibleMessages - 1]?.speaker === "Shopper";

  useEffect(() => {
    if (!open || !playing || zoom || complete) return;
    const delay = messages[visibleMessages - 1]?.pause ?? openingPause;
    const timer = window.setTimeout(() => setVisibleMessages((count) => count + 1), delay);
    return () => window.clearTimeout(timer);
  }, [visibleMessages, open, playing, zoom, complete]);

  useEffect(() => {
    const log = transcript.current;
    if (!open || !log || !following.current) return;
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    log.scrollTo?.({
      top: log.scrollHeight,
      behavior: reduceMotion ? "instant" : "smooth",
    });
  }, [open, visibleMessages, typing]);

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
                onScroll={(event) => {
                  if (!open) return;
                  const log = event.currentTarget;
                  const atBottom = log.scrollHeight - log.clientHeight - log.scrollTop <= 12;
                  if (atBottom || log.scrollTop < lastTop.current) following.current = atBottom;
                  lastTop.current = log.scrollTop;
                }}
                className="h-[22rem] space-y-3 overflow-y-auto overscroll-contain px-4 py-4 text-sm leading-relaxed [overflow-anchor:none] [scrollbar-gutter:stable] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#a40f45] lg:h-[30rem]"
              >
                {!visibleMessages && !playing && (
                  <p className="rounded-xl bg-[#f8eee7] p-4">
                    Watch a shopper explore whether Kit is the right gift and discover outfits that
                    fit.
                  </p>
                )}
                {messages.slice(0, visibleMessages).map(({ speaker, text, outfits }) => (
                  <div key={text} className="space-y-2">
                    <ChatBubble speaker={speaker} text={text} />
                    {outfits && <KitOutfitCarousel />}
                  </div>
                ))}
                {typing && (
                  <div
                    aria-hidden="true"
                    className="flex w-fit gap-1 rounded-2xl bg-[#f8eee7] px-3 py-3"
                  >
                    {[0, 1, 2].map((dot) => (
                      <span
                        key={dot}
                        style={{ animationDelay: `${dot * 120}ms` }}
                        className="size-1.5 rounded-full bg-[#a40f45]/60 motion-safe:animate-bounce"
                      />
                    ))}
                  </div>
                )}
              </div>
              <div className="border-t border-[#e6d4d8] px-4 py-3">
                <button
                  type="button"
                  onClick={() => {
                    if (complete) {
                      following.current = true;
                      lastTop.current = 0;
                      transcript.current?.scrollTo?.({ top: 0, behavior: "instant" });
                      setVisibleMessages(0);
                      setPlaying(true);
                    } else {
                      setPlaying((active) => !active);
                    }
                  }}
                  aria-controls="kit-transcript"
                  className="inline-flex min-h-10 max-w-full items-center gap-2 rounded-xl border border-[#a40f45]/30 px-3 py-2 text-left text-xs font-semibold text-[#a40f45] hover:bg-[#fbe8ef] focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  {complete ? (
                    <RotateCcw className="size-4" aria-hidden="true" />
                  ) : playing ? (
                    <Pause className="size-4" aria-hidden="true" />
                  ) : (
                    <Play className="size-4" aria-hidden="true" />
                  )}
                  {complete
                    ? "Replay conversation"
                    : playing
                      ? "Pause conversation"
                      : visibleMessages
                        ? "Resume conversation"
                        : "Play conversation"}
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
                  if (!visibleMessages) setPlaying(true);
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

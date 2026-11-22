import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    name: "Nanea’s Volunteer Outfit for 18-inch Dolls",
    image: "nanea-volunteer",
    handle: "naneas-volunteer-outfit-for-18-inch-dolls-historical-characters-jfp68",
  },
  {
    name: "Maryellen’s Poodle Skirt Outfit for 18-inch Dolls",
    image: "maryellen-poodle-skirt",
    handle: "maryellen-poodle-skirt-outfit-cmc47",
  },
  {
    name: "Julie’s Pajamas & Robe for 18-inch Dolls",
    image: "julie-pajamas",
    handle: "julie-pajamas-and-robe-for-18-inch-dolls-ghr37",
  },
];

export function KitOutfitCarousel() {
  const track = useRef<HTMLUListElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  function move(direction: -1 | 1) {
    const card = track.current?.firstElementChild;
    if (!card) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.current?.scrollBy({
      left: direction * (card.clientWidth + 8),
      behavior: reduceMotion ? "instant" : "smooth",
    });
  }

  return (
    <div className="min-w-0 rounded-xl border border-[#e6d4d8] bg-white p-2.5">
      <div className="mb-2 flex items-center justify-between gap-2">
        <p id="kit-outfits-heading" className="text-xs font-semibold">
          Outfits for 18-inch dolls
        </p>
        <div className="flex gap-1">
          <button
            type="button"
            aria-label="Previous outfit"
            aria-controls="kit-outfits"
            disabled={edges.start}
            onClick={() => move(-1)}
            className="rounded p-1 text-[#a40f45] hover:bg-[#fbe8ef] disabled:opacity-40"
          >
            <ChevronLeft className="size-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next outfit"
            aria-controls="kit-outfits"
            disabled={edges.end}
            onClick={() => move(1)}
            className="rounded p-1 text-[#a40f45] hover:bg-[#fbe8ef] disabled:opacity-40"
          >
            <ChevronRight className="size-4" aria-hidden="true" />
          </button>
        </div>
      </div>
      <ul
        id="kit-outfits"
        ref={track}
        aria-labelledby="kit-outfits-heading"
        className="flex w-full min-w-0 snap-x snap-mandatory gap-2 overflow-x-auto overscroll-x-contain pb-2"
        onScroll={(event) => {
          const { scrollLeft, scrollWidth, clientWidth } = event.currentTarget;
          setEdges({ start: scrollLeft <= 1, end: scrollLeft + clientWidth >= scrollWidth - 1 });
        }}
      >
        {products.map(({ name, image, handle }) => (
          <li
            key={handle}
            className="w-30 shrink-0 snap-start overflow-hidden rounded-lg border border-[#e6d4d8]"
          >
            <a
              href={`https://www.americangirl.com/products/${handle}`}
              target="_blank"
              rel="noreferrer"
              className="block h-full hover:bg-[#f8eee7] focus-visible:-outline-offset-2"
            >
              <img
                src={`/images/american-girl/kit-outfits/${image}.webp`}
                alt=""
                width={400}
                height={400}
                className="aspect-square w-full bg-[#f8eee7] object-contain"
              />
              <span className="block p-2 text-xs leading-snug font-semibold">{name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

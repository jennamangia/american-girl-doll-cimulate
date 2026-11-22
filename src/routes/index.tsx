import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Hero,
  Today,
  Reimagined,
  Business,
  Proof,
  Closing,
  useReveal,
} from "@/components/microsite/Sections";
import { Understanding } from "@/components/microsite/Understanding";

import { ShopperAgent } from "@/components/microsite/ShopperAgent";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "American Girl × Cimulate — Reimagining Discovery" },
      {
        name: "description",
        content:
          "An executive concept showing how Cimulate, acquired by Salesforce, could transform product discovery for American Girl.",
      },
      { property: "og:title", content: "American Girl × Cimulate" },
      {
        property: "og:description",
        content: "From matching words to understanding shopper intent.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  const [active, setActive] = useState(0);
  return (
    <main>
      <Hero setActive={setActive} />
      <Today active={active} setActive={setActive} />
      <Reimagined active={active} setActive={setActive} />
      <Understanding />
      <Proof />
      <ShopperAgent />
      <Business />
      <Closing />
    </main>
  );
}

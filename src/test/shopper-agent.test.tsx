import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ShopperAgent } from "@/components/microsite/ShopperAgent";

describe("Illustrative Kit Shopper Agent", () => {
  it("opens and closes alongside the product page and answers each suggested question", () => {
    render(<ShopperAgent />);

    fireEvent.click(screen.getByRole("button", { name: "Close Shopper Agent" }));
    expect(screen.queryByRole("group", { name: "Suggested follow-up questions" })).toBeNull();
    expect(screen.getByRole("img", { name: /Kit Kittredge product page/ })).toBeVisible();

    fireEvent.click(screen.getByRole("button", { name: "Ask about Kit" }));
    const suggested = screen.getByRole("group", { name: "Suggested follow-up questions" });
    const examples = [
      ["What comes with Kit?", /embroidered purse/],
      ["Explore compatible outfits", /listings that specify they fit/],
      ["Compare other dolls", /story is set in 1934/],
    ] as const;

    for (const [question, answer] of examples) {
      const button = within(suggested).getByRole("button", { name: question });
      fireEvent.click(button);
      expect(button).toHaveAttribute("aria-pressed", "true");
      expect(screen.getByText(answer)).toBeVisible();
    }
    expect(screen.queryByText(/embroidered purse/)).toBeNull();
  });

  it("enlarges the product-page screenshot and closes on Escape", () => {
    render(<ShopperAgent />);
    fireEvent.click(screen.getByRole("button", { name: "Enlarge product page" }));
    expect(screen.getByRole("dialog", { name: "Enlarged Kit product page" })).toBeVisible();
    fireEvent.keyDown(window, { key: "Escape" });
    expect(screen.queryByRole("dialog")).toBeNull();
  });
});

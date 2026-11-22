import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ShopperAgent } from "@/components/microsite/ShopperAgent";

describe("Illustrative Kit Shopper Agent", () => {
  it("appends each turn in order and preserves the transcript when closed and reopened", () => {
    render(<ShopperAgent />);
    const history = screen.getByRole("log", { name: "Kit conversation history" });
    const firstQuestion = "I'm shopping for my 8-year-old niece. Would Kit be a good first doll?";
    expect(within(history).getByText(firstQuestion)).toBeVisible();

    const examples = [
      ["What comes with Kit?", /embroidered purse/],
      ["Could she dress Kit in other outfits?", /labeled for 18-inch American Girl dolls/],
      ["How does Kit compare with other historical dolls?", /home front during World War II/],
      ["What would you choose for her first doll?", /I’d start with Kit/],
    ] as const;

    for (const [question, answer] of examples) {
      fireEvent.click(screen.getByRole("button", { name: question }));
      expect(within(history).getByText(answer)).toBeVisible();
    }

    const messages = Array.from(history.querySelectorAll("p"), (message) => message.textContent);
    expect(messages).toHaveLength(10);
    expect(messages.filter((_, index) => index % 2 === 0)).toEqual(
      [firstQuestion, ...examples.map(([question]) => question)].map(
        (question) => `Shopper: ${question}`,
      ),
    );
    expect(within(history).getByText(/embroidered purse/)).toBeVisible();

    fireEvent.click(screen.getByRole("button", { name: "Close Shopper Agent" }));
    expect(screen.queryByRole("log")).toBeNull();
    expect(screen.getByRole("img", { name: /Kit Kittredge product page/ })).toBeVisible();

    fireEvent.click(screen.getByRole("button", { name: "Ask about Kit" }));
    expect(screen.getByRole("log")).toBe(history);
    expect(within(history).getByText(/I’d start with Kit/)).toBeVisible();

    fireEvent.click(screen.getByRole("button", { name: "Replay conversation" }));
    expect(within(history).getByText(firstQuestion)).toBeVisible();
    expect(within(history).getByText(/recommended for ages 8 and up/)).toBeVisible();
    expect(within(history).queryByText(/I’d start with Kit/)).toBeNull();
    expect(screen.getByRole("button", { name: "What comes with Kit?" })).toBeVisible();
  });

  it("enlarges the product-page screenshot and closes on Escape", () => {
    render(<ShopperAgent />);
    fireEvent.click(screen.getByRole("button", { name: "Enlarge product page" }));
    expect(screen.getByRole("dialog", { name: "Enlarged Kit product page" })).toBeVisible();
    fireEvent.keyDown(window, { key: "Escape" });
    expect(screen.queryByRole("dialog")).toBeNull();
  });
});

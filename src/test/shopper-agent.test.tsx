import { act, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ShopperAgent } from "@/components/microsite/ShopperAgent";

describe("Illustrative Kit Shopper Agent", () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => {
    vi.useRealTimers();
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  function mockViewport() {
    let report: IntersectionObserverCallback;
    const observer = {
      observe: vi.fn(),
      disconnect: vi.fn(),
    };
    vi.stubGlobal(
      "IntersectionObserver",
      vi.fn(function (callback: IntersectionObserverCallback) {
        report = callback;
        return observer;
      }),
    );

    return (ratio: number) =>
      act(() =>
        report(
          [{ isIntersecting: ratio > 0, intersectionRatio: ratio } as IntersectionObserverEntry],
          observer as unknown as IntersectionObserver,
        ),
      );
  }

  function advance() {
    act(() => vi.advanceTimersToNextTimer());
  }

  it("starts after one second at half visibility and suspends playback when out of view", () => {
    const report = mockViewport();
    render(<ShopperAgent />);
    const history = within(screen.getByRole("log"));

    report(0.49);
    act(() => vi.advanceTimersByTime(2000));
    expect(history.queryByText("What comes with Kit?")).toBeNull();

    report(0.5);
    act(() => vi.advanceTimersByTime(900));
    expect(history.queryByText("What comes with Kit?")).toBeNull();
    report(0);
    act(() => vi.advanceTimersByTime(2000));
    expect(history.queryByText("What comes with Kit?")).toBeNull();

    report(0.5);
    act(() => vi.advanceTimersByTime(1000));
    expect(history.getByText("What comes with Kit?")).toBeVisible();
    act(() => vi.advanceTimersByTime(800));
    report(0);
    act(() => vi.advanceTimersByTime(10000));
    expect(history.queryByText(/signature outfit/)).toBeNull();
    report(0.5);
    act(() => vi.advanceTimersByTime(999));
    expect(history.queryByText(/signature outfit/)).toBeNull();
    act(() => vi.advanceTimersByTime(1));
    expect(history.getByText(/signature outfit/)).toBeVisible();
    expect(history.getAllByText("What comes with Kit?")).toHaveLength(1);

    fireEvent.click(screen.getByRole("button", { name: "Pause conversation" }));
    report(0);
    report(0.5);
    act(() => vi.advanceTimersByTime(30000));
    expect(history.queryByText(/turning 8/)).toBeNull();
    fireEvent.click(screen.getByRole("button", { name: "Resume conversation" }));
    advance();
    expect(history.getByText(/turning 8/)).toBeVisible();

    for (let n = 0; n < 6; n++) advance();
    report(0);
    report(0.5);
    act(() => vi.advanceTimersByTime(10000));
    expect(screen.getByRole("button", { name: "Replay conversation" })).toBeVisible();
    expect(history.getByText(/Kit is a wonderful starting point/)).toBeVisible();
  });

  it("leaves playback manual for visitors who prefer reduced motion", () => {
    const report = mockViewport();
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    vi.spyOn(window, "matchMedia").mockReturnValue({ ...mediaQuery, matches: true });
    render(<ShopperAgent />);
    report(0.75);
    act(() => vi.advanceTimersByTime(5000));
    expect(screen.queryByText("What comes with Kit?")).toBeNull();
    fireEvent.click(screen.getByRole("button", { name: "Play conversation" }));
    advance();
    expect(screen.getByText("What comes with Kit?")).toBeVisible();
  });

  it("plays messages sequentially, pauses when closed and resumes the same transcript", () => {
    render(<ShopperAgent />);
    fireEvent.click(screen.getByRole("button", { name: "Play conversation" }));
    advance();
    const history = screen.getByRole("log");
    expect(within(history).getByText("What comes with Kit?")).toBeVisible();
    expect(within(history).queryByText(/signature outfit/)).toBeNull();
    advance();
    expect(within(history).getByText(/signature outfit/)).toBeVisible();

    fireEvent.click(screen.getByRole("button", { name: "Close Shopper Agent" }));
    act(() => vi.advanceTimersByTime(60000));
    expect(screen.queryByRole("log")).toBeNull();
    expect(screen.getByRole("img", { name: /Kit Kittredge product page/ })).toBeVisible();

    fireEvent.click(screen.getByRole("button", { name: "Ask about Kit" }));
    expect(screen.getByRole("log")).toBe(history);
    expect(within(history).queryByText(/turning 8/)).toBeNull();
    act(() => vi.advanceTimersByTime(5500));
    expect(within(history).getByText(/turning 8/)).toBeVisible();
    expect(within(history).getByText("What comes with Kit?")).toBeVisible();
  });

  it("shows compatible product cards in the transcript and starts over on Replay", () => {
    render(<ShopperAgent />);
    fireEvent.click(screen.getByRole("button", { name: "Play conversation" }));
    const history = within(screen.getByRole("log"));
    for (let n = 0; n < 5; n++) advance();
    expect(history.getByText("Can she wear other outfits?")).toBeVisible();
    expect(history.queryByRole("list")).toBeNull();
    advance();

    const outfits = history.getByRole("list", { name: "Outfits for 18-inch dolls" });
    const links = within(outfits).getAllByRole("link");
    expect(links).toHaveLength(3);
    for (const link of links) {
      expect(link).toHaveAttribute(
        "href",
        expect.stringContaining("www.americangirl.com/products/"),
      );
      expect(link.querySelector("img")).toHaveAttribute(
        "src",
        expect.stringContaining("/kit-outfits/"),
      );
    }
    expect(history.getByRole("button", { name: "Previous outfit" })).toBeDisabled();
    expect(history.getByRole("button", { name: "Next outfit" })).toBeEnabled();

    for (let n = 0; n < 3; n++) advance();
    expect(history.getByText(/Kit is a wonderful starting point/)).toBeVisible();
    expect(history.getByText("What comes with Kit?")).toBeVisible();
    fireEvent.click(screen.getByRole("button", { name: "Replay conversation" }));
    expect(history.queryByRole("list")).toBeNull();
    expect(history.queryByText(/Kit is a wonderful starting point/)).toBeNull();
    advance();
    expect(history.getByText("What comes with Kit?")).toBeVisible();
  });

  it("enlarges the product-page screenshot and closes on Escape", () => {
    render(<ShopperAgent />);
    fireEvent.click(screen.getByRole("button", { name: "Enlarge product page" }));
    expect(screen.getByRole("dialog", { name: "Enlarged Kit product page" })).toBeVisible();
    fireEvent.keyDown(window, { key: "Escape" });
    expect(screen.queryByRole("dialog")).toBeNull();
  });
});

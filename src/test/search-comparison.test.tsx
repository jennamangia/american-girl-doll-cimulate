import { fireEvent, render, screen, within } from "@testing-library/react";
import { useState } from "react";
import { describe, expect, it, vi } from "vitest";
import { Hero, Reimagined, Today } from "@/components/microsite/Sections";
import { account } from "@/config/accounts";

function Comparison() {
  const [active, setActive] = useState(0);
  return (
    <>
      <Hero setActive={setActive} />
      <Today active={active} setActive={setActive} />
      <Reimagined active={active} setActive={setActive} />
    </>
  );
}

describe("American Girl search comparison", () => {
  it("keeps the three entry points and the matching screenshot pairs synchronized", () => {
    const { container } = render(<Comparison />);
    const todaySection = container.querySelector<HTMLElement>("#today")!;
    const scrollIntoView = vi.fn();
    todaySection.scrollIntoView = scrollIntoView;
    const today = within(todaySection);
    const proposed = within(container.querySelector("#with-acs")!);

    account.queries.forEach((query, index) => {
      const origin = index % 2 === 0 ? today : proposed;
      fireEvent.click(origin.getByRole("button", { name: `“${query.query}”` }));
      expect(today.getByRole("button", { name: `“${query.query}”` })).toHaveAttribute(
        "aria-pressed",
        "true",
      );
      expect(proposed.getByRole("button", { name: `“${query.query}”` })).toHaveAttribute(
        "aria-pressed",
        "true",
      );
      expect(today.getByRole("img")).toHaveAttribute("src", query.screenshot);
      expect(proposed.getByRole("img")).toHaveAttribute("src", query.proposed);
      expect(proposed.getByText("Illustrative Cimulate-powered search experience")).toBeVisible();
    });

    fireEvent.change(screen.getByRole("combobox"), { target: { value: "Black dress" } });
    expect(scrollIntoView).toHaveBeenCalledOnce();
    expect(today.getByRole("img")).toHaveAttribute(
      "src",
      "/images/american-girl/black-dress-current.png",
    );
    expect(proposed.getByRole("img")).toHaveAttribute(
      "src",
      "/images/american-girl/black-dress-illustrative.png",
    );
  });

  it("zooms the selected grid and returns focus when dismissed", () => {
    const { container } = render(<Comparison />);
    const proposed = within(container.querySelector("#with-acs")!);
    const zoom = proposed.getByRole("button", { name: /click to zoom/i });
    zoom.focus();
    fireEvent.click(zoom);
    const dialog = screen.getByRole("dialog");
    expect(within(dialog).getByRole("img")).toHaveAttribute("src", account.queries[0]!.proposed);
    expect(within(dialog).getByRole("button")).toHaveFocus();
    fireEvent.keyDown(window, { key: "Escape" });
    expect(screen.queryByRole("dialog")).toBeNull();
    expect(zoom).toHaveFocus();
  });
});

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Sample } from "./sample.component";

describe("Sample", () => {
  it("snapshot", () => {
    const { asFragment } = render(<Sample />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct text", () => {
    render(<Sample />);
    expect(screen.getByRole("heading", { name: /header/i })).toBeVisible();
    expect(screen.getByText(/paragraph text./i)).toBeVisible();
  });
});

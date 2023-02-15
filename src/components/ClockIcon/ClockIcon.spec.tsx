import { render, screen } from "@testing-library/react";
import { ClockIcon } from "./index";
describe("components/ClockIcon", () => {
  it("Renders heading", () => {
    render(<ClockIcon />);
    const icon = screen.getByRole("presentation", { hidden: true });
    expect(icon).toBeInTheDocument();
    expect(icon).toBeVisible();
  });
});

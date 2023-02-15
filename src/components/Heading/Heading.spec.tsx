import { render, screen } from "@testing-library/react";
import { Heading } from "./index";
describe("components/Heading", () => {
  it("Renders heading", () => {
    render(<Heading>Test</Heading>);
    const text = screen.getByText(/^Test$/);
    expect(text).toBeInTheDocument();
  });
});

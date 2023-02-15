import { render, screen, within } from "@testing-library/react";
import { Card } from "./index";
describe("components/Card", () => {
  it("Renders card", () => {
    render(
      <Card>
        <Card.Header>
          <h2>Header</h2>
        </Card.Header>
        <Card.Body>Content</Card.Body>
      </Card>
    );

    const card = screen.getByRole("article");
    const header = within(card).getByRole("heading");
    const content = within(card).getByText(/Content/);

    expect(card).toBeInTheDocument();
    expect(header).toHaveTextContent("Header");
    expect(content).toBeVisible();
  });
});

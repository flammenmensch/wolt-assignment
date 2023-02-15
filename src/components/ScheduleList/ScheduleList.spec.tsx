import { render, screen } from "@testing-library/react";
import { ScheduleList } from "./index";
describe("components/ScheduleList", () => {
  it("Renders heading", () => {
    render(
      <ScheduleList>
        <ScheduleList.Item>Item 1</ScheduleList.Item>
        <ScheduleList.Item>Item 2</ScheduleList.Item>
        <ScheduleList.Item>Item 3</ScheduleList.Item>
      </ScheduleList>
    );

    const list = screen.getByRole("list");
    const items = screen.getAllByRole("listitem");

    expect(list).toBeInTheDocument();
    expect(items.length).toEqual(3);
    expect(items[0]).toHaveTextContent("Item 1");
    expect(items[1]).toHaveTextContent("Item 2");
    expect(items[2]).toHaveTextContent("Item 3");
  });
});

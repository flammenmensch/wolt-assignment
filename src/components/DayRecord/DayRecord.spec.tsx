import { render, screen } from "@testing-library/react";
import { DayRecord } from "./index";
import { ComponentProps } from "react";

const getTodayLabel = () => screen.queryByText(/^Today$/);
const getClosedLabel = () => screen.queryByText(/^Closed$/);
describe("components/DayRecord", () => {
  const defaultProps: ComponentProps<typeof DayRecord> = {
    label: "Monday",
    isToday: false,
    ranges: [],
  };
  it("Renders day name", () => {
    render(<DayRecord {...defaultProps} />);

    const dayLabel = screen.queryByText(/^Monday$/);
    const todayLabel = getTodayLabel();
    const closedLabel = getClosedLabel();

    expect(dayLabel).toBeInTheDocument();
    expect(todayLabel).not.toBeInTheDocument();
    expect(closedLabel).toBeInTheDocument();
  });

  it("Renders 'Today' label", () => {
    render(<DayRecord {...defaultProps} isToday={true} />);

    const todayLabel = getTodayLabel();
    expect(todayLabel).toBeInTheDocument();
  });

  it("Renders opening hours", () => {
    const ranges = [
      {
        start: { hours: 9, minutes: 0, seconds: 0, isPM: false },
        end: { hours: 3, minutes: 30, seconds: 0, isPM: true },
      },
    ];

    render(<DayRecord {...defaultProps} ranges={ranges} />);

    const hoursLabel = screen.getByText(/^9 AM - 3.30 PM$/);
    const closedLabel = getClosedLabel();

    expect(closedLabel).not.toBeInTheDocument();
    expect(hoursLabel).toBeInTheDocument();
  });
});

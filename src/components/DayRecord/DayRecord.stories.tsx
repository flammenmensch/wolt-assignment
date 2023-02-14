import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { DayRecord } from ".";

export default {
  title: "components/DayRecord",
  component: DayRecord,
} as ComponentMeta<typeof DayRecord>;

const Template: ComponentStory<typeof DayRecord> = (args) => (
  <DayRecord {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Monday",
  isToday: false,
  ranges: [
    {
      start: { hours: 9, minutes: 15, seconds: 20, isPM: false },
      end: { hours: 1, minutes: 0, seconds: 0, isPM: true },
    },
    {
      start: { hours: 2, minutes: 0, seconds: 0, isPM: true },
      end: { hours: 11, minutes: 45, seconds: 0, isPM: true },
    },
  ],
};

export const Closed = Template.bind({});
Closed.args = {
  label: "Monday",
  ranges: [],
};

export const IsToday = Template.bind({});
IsToday.args = {
  label: "Wednesday",
  isToday: true,
  ranges: [
    {
      start: { hours: 9, minutes: 15, seconds: 20, isPM: false },
      end: { hours: 11, minutes: 45, seconds: 0, isPM: true },
    },
    {
      start: { hours: 2, minutes: 0, seconds: 0, isPM: true },
      end: { hours: 11, minutes: 45, seconds: 0, isPM: true },
    },
    {
      start: { hours: 4, minutes: 15, seconds: 0, isPM: true },
      end: { hours: 10, minutes: 15, seconds: 0, isPM: true },
    },
  ],
};

export const IsTodayClosed = Template.bind({});
IsTodayClosed.args = {
  label: "Monday",
  isToday: true,
  ranges: [],
};

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ScheduleList, ScheduleListItem } from ".";

export default {
  title: "components/ScheduleList",
  component: ScheduleList,
} as ComponentMeta<typeof ScheduleList>;

const Template: ComponentStory<typeof ScheduleList> = (args) => (
  <ScheduleList {...args}>
    <ScheduleListItem>Item 1</ScheduleListItem>
    <ScheduleListItem>Item 2</ScheduleListItem>
    <ScheduleListItem>Item 3</ScheduleListItem>
    <ScheduleListItem>Item 4</ScheduleListItem>
  </ScheduleList>
);

export const Example = Template.bind({});
Example.args = {};

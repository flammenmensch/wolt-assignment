import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ScheduleList } from ".";

export default {
  title: "components/ScheduleList",
  component: ScheduleList,
} as ComponentMeta<typeof ScheduleList>;

const Template: ComponentStory<typeof ScheduleList> = (args) => (
  <ScheduleList {...args}>
    <ScheduleList.Item>Item 1</ScheduleList.Item>
    <ScheduleList.Item>Item 2</ScheduleList.Item>
    <ScheduleList.Item>Item 3</ScheduleList.Item>
    <ScheduleList.Item>Item 4</ScheduleList.Item>
  </ScheduleList>
);

export const Example = Template.bind({});
Example.args = {};

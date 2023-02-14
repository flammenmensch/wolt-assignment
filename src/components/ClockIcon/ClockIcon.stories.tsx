import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ClockIcon } from ".";

export default {
  title: "components/ClockIcon",
  component: ClockIcon,
} as ComponentMeta<typeof ClockIcon>;

const Template: ComponentStory<typeof ClockIcon> = (args) => <ClockIcon />;

export const Example = Template.bind({});
Example.args = {};

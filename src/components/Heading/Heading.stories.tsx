import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Heading } from ".";

export default {
  title: "components/Heading",
  component: Heading,
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args}>Opening hours</Heading>
);

export const Example = Template.bind({});
Example.args = {};

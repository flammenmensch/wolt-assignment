import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Card, CardBody, CardHeader } from ".";

export default {
  title: "components/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  <Card {...args}>
    <CardHeader>Card header</CardHeader>
    <CardBody>Card body</CardBody>
  </Card>
);

export const Example = Template.bind({});
Example.args = {};

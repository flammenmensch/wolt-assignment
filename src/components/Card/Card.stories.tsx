import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Card } from ".";

export default {
  title: "components/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  <Card {...args}>
    <Card.Header>Card header</Card.Header>
    <Card.Body>Card body</Card.Body>
  </Card>
);

export const Example = Template.bind({});
Example.args = {};

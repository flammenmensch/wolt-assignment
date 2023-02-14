import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { rest } from "msw";
import { worker } from "../../mocks/browser";
import { App } from ".";
import { API_ENDPOINT } from "../../constants";

export default {
  title: "application/App",
  component: App,
} as ComponentMeta<typeof App>;

const JSON_RESPONSE = {
  monday: [],
  tuesday: [
    {
      type: "open",
      value: 36000,
    },
    {
      type: "close",
      value: 64800,
    },
  ],
  wednesday: [],
  thursday: [
    {
      type: "open",
      value: 1000,
    },
    {
      type: "close",
      value: 3600,
    },
    {
      type: "open",
      value: 4800,
    },
    {
      type: "close",
      value: 14000,
    },
    {
      type: "open",
      value: 54430,
    },
    {
      type: "close",
      value: 64800,
    },
  ],
  friday: [
    {
      type: "open",
      value: 36000,
    },
  ],
  saturday: [
    {
      type: "close",
      value: 3600,
    },
    {
      type: "open",
      value: 36000,
    },
  ],
  sunday: [
    {
      type: "close",
      value: 3600,
    },
    {
      type: "open",
      value: 43200,
    },
    {
      type: "close",
      value: 75600,
    },
  ],
};

const Template: ComponentStory<typeof App> = () => <App />;

export const Success = Template.bind({});
Success.args = {};
Success.decorators = [
  (Story) => {
    worker.use(
      rest.get(API_ENDPOINT, (req, res, ctx) =>
        res(ctx.delay(1500), ctx.status(200), ctx.json(JSON_RESPONSE))
      )
    );
    return <Story />;
  },
];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [
  (Story) => {
    worker.use(
      rest.get(API_ENDPOINT, (req, res, ctx) => res(ctx.delay("infinite")))
    );
    return <Story />;
  },
];

export const Error = Template.bind({});
Error.args = {};
Error.decorators = [
  (Story) => {
    worker.use(
      rest.get(API_ENDPOINT, (req, res, ctx) =>
        res(ctx.delay(1000), ctx.status(500))
      )
    );
    return <Story />;
  },
];

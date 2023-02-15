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

const Template: ComponentStory<typeof App> = () => <App />;

export const Success = Template.bind({});
Success.args = {};

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

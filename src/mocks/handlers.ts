import { rest } from "msw";
import { API_ENDPOINT } from "../constants";

const IS_NODE_PROCESS =
  Object.prototype.toString.call(
    typeof process !== "undefined" ? process : 0
  ) === "[object process]";

const ms = (duration: number) => (IS_NODE_PROCESS ? 0 : duration);

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

export const handlers = [
  rest.get(API_ENDPOINT, (req, res, ctx) =>
    res(ctx.delay(ms(1500)), ctx.status(200), ctx.json(JSON_RESPONSE))
  ),
];

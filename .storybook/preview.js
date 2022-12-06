import { worker } from "../src/mocks/browser";
import "../src/index.scss";

if (typeof global.process === "undefined") {
  void worker.start();
}
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

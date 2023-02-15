import { renderHook } from "@testing-library/react-hooks";
import { useSchedule } from "./useSchedule";
import { API_ENDPOINT } from "../constants";
import { rest } from "msw";
import { server } from "../mocks/server";

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
describe("application/useSchedule", () => {
  it("handle successful schedule loading", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useSchedule());

    expect(result.current.isLoading).toBeTruthy();
    expect(result.current.error).toBeNull();
    expect(result.current.schedule).toBeNull();

    await waitForNextUpdate({ timeout: 2000 });

    expect(result.current.isLoading).toBeFalsy();
    expect(result.current.error).toBeNull();
    expect(result.current.schedule).not.toBeNull();
  });

  it("handles schedule loading error", async () => {
    server.use(
      rest.get(API_ENDPOINT, (req, res, ctx) => res.once(ctx.status(500)))
    );

    const { result, waitForNextUpdate } = renderHook(() => useSchedule());

    expect(result.current.isLoading).toEqual(true);
    expect(result.current.schedule).toEqual(null);
    expect(result.current.error).toEqual(null);

    await waitForNextUpdate();

    expect(result.current.isLoading).toEqual(false);
    expect(result.current.schedule).toEqual(null);
    expect(result.current.error).not.toEqual(null);
  });
});

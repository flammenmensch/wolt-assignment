import { Schedule } from "../domain";

type Options = {
  signal?: AbortSignal;
};
export const getSchedule = async ({ signal }: Options = {}) => {
  const response = await fetch("/data/schedule.json", {
    signal,
  });

  const json = await response.json();

  return json as Schedule;
};

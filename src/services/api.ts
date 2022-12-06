import { Schedule } from "../domain";
import { API_ENDPOINT } from "../constants";

type Options = {
  signal?: AbortSignal;
};
export const getSchedule = async ({ signal }: Options = {}) => {
  const response = await fetch(API_ENDPOINT, {
    signal,
  });

  const json = await response.json();

  return json as Schedule;
};

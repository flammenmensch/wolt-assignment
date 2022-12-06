import { DayOfWeek, FormattedHours, Hours, Range, Schedule } from "../domain";

export const isToday = (day: number) => new Date().getDay() === day;

export const isPM = (hours: number) => hours >= 12;

export const to12HourFormat = (hours: number) => ((hours + 11) % 12) + 1;

export const pad = (value: number) => value.toString(10).padStart(2, "0");

export const convertTime = (time: number) => {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = Math.floor(time % 60);

  return { hours: to12HourFormat(hours), minutes, seconds, isPM: isPM(hours) };
};

export const formatTime = ({
  hours,
  minutes,
  seconds,
  isPM,
}: FormattedHours) => {
  let result = `${hours}`;
  if (minutes > 0) {
    result += `.${pad(minutes)}`;
    if (seconds > 0) {
      result += `:${pad(seconds)}`;
    }
  } else if (seconds > 0) {
    result += `.${pad(minutes)}:${pad(seconds)}`;
  }
  return `${result} ${isPM ? "PM" : "AM"}`;
};

export const getOpeningRanges = (hours: Array<Hours>): Array<Range> => {
  const result: Array<Range> = [];

  let lastOpen: Hours | null = null,
    current: Hours;

  for (let i = 0, n = hours.length; i < n; i++) {
    current = hours[i];

    if (current.type === "close") {
      if (lastOpen !== null) {
        result.push({
          start: convertTime(lastOpen.value),
          end: convertTime(current.value),
        });
        lastOpen = null;
      }
    } else {
      lastOpen = hours[i];
    }
  }

  if (lastOpen !== null) {
    result.push({
      start: convertTime(lastOpen.value),
    });
  }

  return result;
};

export const formatSchedule = (source: Schedule) =>
  Object.keys(source).map((key, index) => ({
    label: key,
    isToday: isToday(index + 1),
    hours: getOpeningRanges(source[key as DayOfWeek]),
  }));

export const shiftSchedule = (source: Schedule) =>
  Object.keys(source).reduce((acc, day, index, days) => {
    const currentDay = day as DayOfWeek;
    const first = source[currentDay].at(0);

    if (index > 0) {
      const previousDay = days[index - 1] as DayOfWeek;
      const last = acc[previousDay].at(-1);

      if (last?.type === "open" && first?.type === "close") {
        acc[previousDay] = [...acc[previousDay], first];
        acc[currentDay].shift();
      }
    }

    return acc;
  }, source);

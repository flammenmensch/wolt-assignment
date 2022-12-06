export type DayOfWeek =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

export type Status = "open" | "close";

export type Hours = {
  readonly type: Status;
  readonly value: number;
};

export type Schedule = Record<DayOfWeek, Array<Hours>>;

export type FormattedHours = {
  hours: number;
  minutes: number;
  seconds: number;
  isPM: boolean;
};

export type Range = {
  start: FormattedHours;
  end?: FormattedHours;
};

export type FormattedScheduleRecord = {
  readonly label: string;
  readonly isToday: boolean;
  readonly hours: Array<Range>;
};

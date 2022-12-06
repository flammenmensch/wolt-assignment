import * as utils from ".";
import { Hours, Range, Schedule } from "../domain";

describe("utils/date.ts", () => {
  describe("isToday", () => {
    beforeAll(() => {
      // Set date to Monday, December the 5th
      jest.useFakeTimers().setSystemTime(new Date(2022, 11, 5));
    });

    test.each`
      input | output
      ${1}  | ${true}
      ${2}  | ${false}
      ${3}  | ${false}
      ${4}  | ${false}
      ${5}  | ${false}
      ${6}  | ${false}
      ${7}  | ${false}
    `("check if provided day is today", ({ input, output }) => {
      expect(utils.isToday(input)).toEqual(output);
    });

    afterAll(() => {
      jest.useRealTimers();
    });
  });

  describe("isPM", () => {
    test.each`
      input | output
      ${0}  | ${false}
      ${1}  | ${false}
      ${11} | ${false}
      ${12} | ${true}
      ${18} | ${true}
      ${23} | ${true}
    `("detects AM or PM for provided hours", ({ input, output }) => {
      expect(utils.isPM(input)).toEqual(output);
    });
  });

  describe("to12HourFormat", () => {
    test.each`
      input | output
      ${0}  | ${12}
      ${1}  | ${1}
      ${11} | ${11}
      ${13} | ${1}
      ${23} | ${11}
      ${12} | ${12}
    `("convert 24h to 12h", ({ input, output }) => {
      expect(utils.to12HourFormat(input)).toEqual(output);
    });
  });

  describe("pad", () => {
    test.each`
      input | output
      ${0}  | ${"00"}
      ${1}  | ${"01"}
      ${12} | ${"12"}
      ${23} | ${"23"}
    `(
      "converts number to string and adds extra zero if needed",
      ({ input, output }) => {
        expect(utils.pad(input)).toEqual(output);
      }
    );
  });

  describe("convertTime", () => {
    test.each`
      input    | output
      ${0}     | ${{ hours: 12, minutes: 0, seconds: 0, isPM: false }}
      ${36000} | ${{ hours: 10, minutes: 0, seconds: 0, isPM: false }}
      ${36030} | ${{ hours: 10, minutes: 0, seconds: 30, isPM: false }}
      ${64800} | ${{ hours: 6, minutes: 0, seconds: 0, isPM: true }}
      ${43200} | ${{ hours: 12, minutes: 0, seconds: 0, isPM: true }}
      ${75600} | ${{ hours: 9, minutes: 0, seconds: 0, isPM: true }}
    `("converts seconds to FormattedHours object", ({ input, output }) => {
      expect(utils.convertTime(input)).toEqual(output);
    });
  });

  describe("formatTime", () => {
    test.each`
      input                                                   | output
      ${{ hours: 12, minutes: 0, seconds: 0, isPM: false }}   | ${"12 AM"}
      ${{ hours: 10, minutes: 30, seconds: 0, isPM: false }}  | ${"10.30 AM"}
      ${{ hours: 10, minutes: 20, seconds: 30, isPM: false }} | ${"10.20:30 AM"}
      ${{ hours: 10, minutes: 0, seconds: 30, isPM: false }}  | ${"10.00:30 AM"}
      ${{ hours: 6, minutes: 0, seconds: 0, isPM: true }}     | ${"6 PM"}
      ${{ hours: 6, minutes: 30, seconds: 0, isPM: true }}    | ${"6.30 PM"}
      ${{ hours: 6, minutes: 0, seconds: 30, isPM: true }}    | ${"6.00:30 PM"}
    `("converts seconds to FormattedHours object", ({ input, output }) => {
      expect(utils.formatTime(input)).toEqual(output);
    });
  });

  describe("getOpeningRanges", () => {
    test("convert empty array", () => {
      expect(utils.getOpeningRanges([])).toEqual([]);
    });
    test("convert array of single closed time", () => {
      expect(utils.getOpeningRanges([{ type: "close", value: 3600 }])).toEqual(
        []
      );
    });
    test("convert array of Hours objects to array of corresponding Range objects", () => {
      const input = [
        { type: "close", value: 3600 },
        { type: "open", value: 32400 },
        { type: "close", value: 39600 },
        { type: "open", value: 57600 },
        { type: "close", value: 82800 },
      ] as Array<Hours>;
      const output = [
        {
          start: { hours: 9, minutes: 0, seconds: 0, isPM: false },
          end: { hours: 11, minutes: 0, seconds: 0, isPM: false },
        },
        {
          start: { hours: 4, minutes: 0, seconds: 0, isPM: true },
          end: { hours: 11, minutes: 0, seconds: 0, isPM: true },
        },
      ] as Array<Range>;
      expect(utils.getOpeningRanges(input)).toEqual(output);
    });
  });
  describe("shiftSchedule", () => {
    test("shift first closing day to match last opening day", () => {
      const input: Schedule = {
        monday: [{ type: "open", value: 36000 }],
        tuesday: [
          { type: "close", value: 3600 },
          { type: "open", value: 43200 },
          { type: "close", value: 45000 },
          { type: "close", value: 48000 },
        ],
        wednesday: [],
        thursday: [],
        friday: [{ type: "open", value: 36000 }],
        saturday: [{ type: "close", value: 3600 }],
        sunday: [],
      };

      const output: Schedule = {
        monday: [
          { type: "open", value: 36000 },
          { type: "close", value: 3600 },
        ],
        tuesday: [
          { type: "open", value: 43200 },
          { type: "close", value: 45000 },
          { type: "close", value: 48000 },
        ],
        wednesday: [],
        thursday: [],
        friday: [
          { type: "open", value: 36000 },
          { type: "close", value: 3600 },
        ],
        saturday: [],
        sunday: [],
      };

      expect(utils.shiftSchedule(input)).toEqual(output);
    });
  });
});

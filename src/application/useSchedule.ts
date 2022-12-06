import { useEffect, useState } from "react";
import { FormattedScheduleRecord } from "../domain";
import { getSchedule } from "../services/api";
import { formatSchedule, shiftSchedule } from "../utils";

export const useSchedule = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [schedule, setSchedule] =
    useState<Array<FormattedScheduleRecord> | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);

    getSchedule({ signal: controller.signal })
      .then((result) => {
        const formattedSchedule = formatSchedule(shiftSchedule(result));
        setSchedule(formattedSchedule);
        setError(null);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => setLoading(false));

    return () => {
      controller.abort();
    };
  }, []);

  return { isLoading, schedule, error };
};

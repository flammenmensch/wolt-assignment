import { useSchedule } from "../../application/useSchedule";
import { Card, CardBody, CardHeader } from "../Card";
import { ScheduleList, ScheduleListItem } from "../ScheduleList";
import { DayRecord } from "../DayRecord";
import { Heading } from "../Heading";

import styles from "./App.module.scss";

const App = () => {
  const { isLoading, error, schedule } = useSchedule();

  return (
    <div className={styles.app}>
      <Card>
        <CardHeader>
          <Heading>
            <span
              aria-hidden={true}
              role="presentation"
              className={`${styles.icon} material-symbols-outlined`}
            />
            Opening hours
          </Heading>
        </CardHeader>
        <CardBody>
          {isLoading && (
            <span className={styles.loading}>Loading schedule...</span>
          )}
          {error && (
            <span className={styles.error}>
              An error has occurred: {error.message}
            </span>
          )}
          {schedule && (
            <ScheduleList>
              {schedule.map((item) => (
                <ScheduleListItem key={item.label}>
                  <DayRecord
                    label={item.label}
                    isToday={item.isToday}
                    ranges={item.hours}
                  />
                </ScheduleListItem>
              ))}
            </ScheduleList>
          )}
        </CardBody>
      </Card>
    </div>
  );
};

export default App;

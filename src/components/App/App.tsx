import { useSchedule } from "../../application/useSchedule";
import { Card } from "../Card";
import { ScheduleList } from "../ScheduleList";
import { DayRecord } from "../DayRecord";
import { Heading } from "../Heading";

import styles from "./App.module.scss";
import { ClockIcon } from "../ClockIcon";

const App = () => {
  const { isLoading, error, schedule } = useSchedule();

  return (
    <div className={styles.app}>
      <Card>
        <Card.Header>
          <ClockIcon />
          <Heading>Opening hours</Heading>
        </Card.Header>
        <Card.Body>
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
                <ScheduleList.Item key={item.label}>
                  <DayRecord
                    label={item.label}
                    isToday={item.isToday}
                    ranges={item.hours}
                  />
                </ScheduleList.Item>
              ))}
            </ScheduleList>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default App;

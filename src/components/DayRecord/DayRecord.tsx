import styles from "./DayRecord.module.scss";
import { Range } from "../../domain";
import { formatTime } from "../../utils";

interface Props {
  label: string;
  isToday?: boolean;
  ranges: Array<Range>;
}

const DayRecord = ({ isToday, ranges = [], label }: Props) => {
  const isEmpty = ranges.length === 0;

  return (
    <div className={styles.container}>
      <p className={styles.labelContainer}>
        <span className={styles.label}>{label}</span>
        {isToday && <span className={styles.today}>Today</span>}
      </p>
      {isEmpty ? (
        <span className={styles.closed}>Closed</span>
      ) : (
        <ul className={styles.rangeList}>
          {ranges.map((range, i) => (
            <li key={i}>
              {formatTime(range.start)}
              {range.end && <> - {formatTime(range.end)}</>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DayRecord;

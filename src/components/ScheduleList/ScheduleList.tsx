import styles from "./ScheduleList.module.scss";
import { PropsWithChildren } from "react";
const ScheduleList = (props: PropsWithChildren) => {
  return <ul className={styles.list}>{props.children}</ul>;
};

export const ScheduleListItem = (props: PropsWithChildren) => {
  return <li className={styles.item}>{props.children}</li>;
};

export default ScheduleList;

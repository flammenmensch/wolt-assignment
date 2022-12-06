import { PropsWithChildren } from "react";

import styles from "./Heading.module.scss";

const Heading = (props: PropsWithChildren) => (
  <h2 className={styles.heading}>{props.children}</h2>
);

export default Heading;

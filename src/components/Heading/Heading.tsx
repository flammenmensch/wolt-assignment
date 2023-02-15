import { PropsWithChildren } from "react";

import styles from "./Heading.module.scss";

const Heading = (props: PropsWithChildren) => (
  <h1 className={styles.heading}>{props.children}</h1>
);

export default Heading;

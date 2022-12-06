import styles from "./Card.module.scss";
import { PropsWithChildren } from "react";

const Card = (props: PropsWithChildren) => {
  return <article className={styles.card}>{props.children}</article>;
};

export const CardHeader = (props: PropsWithChildren) => (
  <header className={styles.cardHeader}>{props.children}</header>
);

export const CardBody = (props: PropsWithChildren) => (
  <section className={styles.cardBody}>{props.children}</section>
);

export default Card;

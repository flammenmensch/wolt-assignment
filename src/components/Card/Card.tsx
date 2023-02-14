import styles from "./Card.module.scss";
import { PropsWithChildren } from "react";

const Card = (props: PropsWithChildren) => {
  return <article className={styles.card}>{props.children}</article>;
};

Card.Header = (props: PropsWithChildren) => (
  <header className={styles.header}>{props.children}</header>
);

Card.Body = (props: PropsWithChildren) => (
  <section className={styles.body}>{props.children}</section>
);

export default Card;

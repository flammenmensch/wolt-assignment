import styles from "./ClockIcon.module.scss";

export default () => (
  <span
    aria-hidden={true}
    role="presentation"
    className={`${styles.icon} material-symbols-outlined`}
  />
);

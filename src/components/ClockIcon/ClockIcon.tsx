import styles from "./ClockIcon.module.scss";

const ClockIcon = () => (
  <span
    aria-hidden={true}
    role="presentation"
    className={`${styles.icon} material-symbols-outlined`}
  />
);

export default ClockIcon;

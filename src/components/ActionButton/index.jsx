import React from "react";
import styles from "./ActionButton.module.scss";

export default function ActionButton({ children }) {
  return <button className={styles.root}>{children}</button>;
}

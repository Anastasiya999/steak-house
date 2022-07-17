import React from "react";
import ActionButton from "../ActionButton";

import styles from "./Ad.module.scss";

export default function Ad({ children, mode, accent }) {
  return (
    <div
      className={[
        styles.root,
        mode == "dark" ? styles.dark : styles.light,
        accent == "red" ? styles.highlightRed : styles.highlightBlack,
      ].join(" ")}
    >
      {children}
      <ActionButton>Zamów online</ActionButton>
    </div>
  );
}

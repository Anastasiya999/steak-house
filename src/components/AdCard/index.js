import React from "react";

import styles from "./Adcard.module.scss";

export default function AdCard({ imgURL, children }) {
  return (
    <div
      className={styles.card}
      style={{
        backgroundImage: `url(${imgURL})`,
      }}
    >
      {children}
    </div>
  );
}

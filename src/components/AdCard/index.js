import React from "react";
import ActionButton from "../ActionButton";
import Ad from "../Ad";

import styles from "./Ad.module.scss";

export default function AdCard({ imgURL, children }) {
  return (
    <div
      className={styles.card}
      style={{
        backgroundImage: `url(${imgURL})`,
      }}
    >
      <Ad> {children}</Ad>
    </div>
  );
}

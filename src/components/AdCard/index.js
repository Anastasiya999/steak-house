import React from "react";
import ActionButton from "../ActionButton";

import styles from "./Ad.module.scss";

export default function AdCard({ title, imgURL, darkSpan, children }) {
  return (
    <div
      className={styles.card}
      style={{
        backgroundImage: `url(${imgURL})`,
      }}
    >
      <div
        className={[
          styles.cardContent,
          darkSpan ? styles.dark : styles.bright,
        ].join(" ")}
      >
        <h1>{title}</h1>
        {children}
        <ActionButton>Zamów online</ActionButton>
      </div>
    </div>
  );
}

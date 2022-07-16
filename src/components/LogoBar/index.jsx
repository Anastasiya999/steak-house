import React from "react";
import styles from "./LogoBar.module.scss";

export default function LogoBar({ logos }) {
  return (
    <ul className={styles.root}>
      {logos.map((item, idx) => (
        <li key={idx}>
          <img src={item} />
        </li>
      ))}
    </ul>
  );
}

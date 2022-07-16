import React from "react";
import styles from "./NavBar.module.scss";

export default function IconButton({ src, title }) {
  return (
    <div className={styles.iconBtn}>
      <img src={src} />
      <span>{title}</span>
    </div>
  );
}

import React from "react";
import styles from "./Menu.module.scss";

export default function Menu({ isMenuOpen, onClick }) {
  return (
    <div className={[styles.root, isMenuOpen && styles.mobile].join(" ")}>
      {isMenuOpen && <button onClick={() => onClick()}>Close</button>}
      <ul>
        <li>Menu item</li>
        <li>Menu item</li>
        <li>Menu item</li>
        <li>Menu item</li>
      </ul>
    </div>
  );
}

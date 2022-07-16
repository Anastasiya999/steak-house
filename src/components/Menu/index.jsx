import React from "react";
import styles from "./Menu.module.scss";

export default function Menu({ isMenuOpen, onClick }) {
  return (
    <div className={[styles.root, isMenuOpen && styles.mobile].join(" ")}>
      {isMenuOpen && (
        <img
          role="button"
          src="/assets/menu_close.svg"
          onClick={() => onClick()}
        />
      )}
      <ul>
        <li>Steaks</li>
        <li>Burgers</li>
        <li>French fries</li>
        <li>Drinks</li>
        <li>Gdzie dowozimy?</li>
        <li>Kontakt</li>
      </ul>
    </div>
  );
}

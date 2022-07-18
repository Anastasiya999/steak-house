import React from "react";
import styles from "./Menu.module.scss";

const menu = [
  "Steaks",
  "Burgers",
  "French fries",
  "Drinks",
  "Gdzie dowozimy?",
  "Kontakt",
];

export default function Menu({ isMenuOpen, onClick }) {
  const [isActive, setActive] = React.useState(-1);
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
        {menu.map((item, idx) => (
          <li key={idx}>
            <a
              href="#"
              className={isActive == idx ? styles.selected : ""}
              onClick={() => setActive(idx)}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

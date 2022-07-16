import React from "react";
import Menu from "../Menu";

import styles from "./NavBar.module.scss";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.navLeft}>
        <img
          src="/assets/menu.svg"
          onClick={toggleMenu}
          className={styles.navMenu}
        />
        <img src="/assets/l.png" className={styles.navLogo} />
        <Menu isMenuOpen={isMenuOpen} onClick={toggleMenu} />
      </div>

      <div className={styles.navRight}>
        <div className={styles.navRightItem}>
          <img src="/assets/mojekonto.svg" />
          <span>Moje konto</span>
        </div>
        <div className={styles.navRightItem}>
          <img src="/assets/koszyk.svg" />
          <span>Koszyk</span>
        </div>

        <button>
          <img src="/assets/zamow_ikona.svg" />
          <span>Zamów</span>
        </button>
      </div>
    </nav>
  );
}

import React from "react";
import Menu from "../Menu";
import IconButton from "./IconButton";
import ActionButton from "../ActionButton";

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
        <img
          src="/assets/l.png"
          srcSet="/assets/l@2x.png 2x"
          alt="steak house logo"
          className={styles.navLogo}
        />
        <Menu isMenuOpen={isMenuOpen} onClick={toggleMenu} />
      </div>

      <div className={styles.navRight}>
        <IconButton title="Moje konto" src="/assets/mojekonto.svg" />
        <IconButton title="Koszyk" src="/assets/koszyk.svg" />
        <ActionButton>
          <IconButton title="Zamów" src="/assets/zamow_ikona.svg" />
        </ActionButton>
      </div>
    </nav>
  );
}

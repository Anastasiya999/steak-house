import React from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./LogoBar.module.scss";

export default function LogoBar({ logos }) {
  // const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  // if (isTabletOrMobile)
  //   return (
  //     <marquee width="100%" direction="left" scrollamount={6}>
  //       <ul className={styles.root}>
  //         {logos.map((item, idx) => (
  //           <li key={idx}>
  //             <img src={item} />
  //           </li>
  //         ))}
  //       </ul>
  //     </marquee>
  //   );
  return (
    <div className={styles.marquee}>
      <ul className={styles.root}>
        {logos.map((item, idx) => (
          <li key={idx}>
            <img src={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

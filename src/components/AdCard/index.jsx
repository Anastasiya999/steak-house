import React from "react";

import styles from "./Adcard.module.scss";

export default function AdCard({ imgURL, children }) {
  const [img, img2x] = imgURL;
  return (
    <div
      className={styles.card}
      style={{
        backgroundImage: `-webkit-image-set( url(${img}) 1x, url(${img2x}) 2x )`,
      }}
    >
      {children}
    </div>
  );
}

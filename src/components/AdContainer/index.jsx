import React from "react";
import AdCard from "../AdCard";

import styles from "./AdContainer.module.scss";

export default function AdContainer() {
  return (
    <div className={styles.root}>
      <AdCard
        title="Zestaw dla 3 osób"
        imgURL="/assets/dana-devolk-x2cNcfz_xXU-unsplash.png"
        darkSpan
      >
        <p>
          Razem smakuje lepiej! Zamów zestawy obiadowy dla 3 osób już od
          <span> 39zł </span>
        </p>
      </AdCard>
      <AdCard title="UberEats" imgURL="/assets/aplikacja.png">
        <p>
          Zamawiaj w aplikacji <span> 10% </span> taniej. Pobierz aplikację
          UberEats już dziś.
        </p>
        <div>
          <img src="/assets/App_Store_(iOS).svg" />
          <img src="/assets/Group 4.svg" />
          <img src="/assets/huawei-app-badge-9757fa 2.svg" />
        </div>
      </AdCard>
    </div>
  );
}

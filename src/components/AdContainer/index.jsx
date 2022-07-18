import React from "react";
import AdCard from "../AdCard";
import Ad from "../Ad";

import styles from "./AdContainer.module.scss";

export default function AdContainer() {
  return (
    <div className={styles.root}>
      <AdCard imgURL="/assets/dana-devolk-x2cNcfz_xXU-unsplash.png">
        <Ad>
          <h2>Zestaw dla 3 osób</h2>
          <p>
            Razem smakuje lepiej! Zamów zestawy obiadowy dla 3 osób już od
            <span> 39zł </span>
          </p>
        </Ad>
      </AdCard>
      <AdCard imgURL="/assets/aplikacja.png">
        <Ad accent="red">
          <h2>UberEats</h2>
          <p>
            Zamawiaj w aplikacji <span> 10% </span> taniej. Pobierz aplikację
            UberEats już dziś.
          </p>
          <div>
            <img src="/assets/App_Store_(iOS).svg" />
            <img src="/assets/Group 4.svg" />
            <img src="/assets/huawei-app-badge-9757fa 2.svg" />
          </div>
        </Ad>
      </AdCard>
    </div>
  );
}

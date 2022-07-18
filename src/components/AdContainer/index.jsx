import React from "react";
import AdCard from "../AdCard";
import Ad from "../Ad";

import styles from "./AdContainer.module.scss";

export default function AdContainer() {
  return (
    <div className={styles.root}>
      <AdCard
        imgURL={[
          "/assets/dana-devolk-x2cNcfz_xXU-unsplash.png",
          "/assets/dana-devolk-x2cNcfz_xXU-unsplash@2x.png",
        ]}
      >
        <Ad>
          <h2>Zestaw dla 3 osób</h2>
          <p>
            Razem smakuje lepiej! Zamów zestawy obiadowy dla 3 osób już od
            <span> 39zł </span>
          </p>
        </Ad>
      </AdCard>
      <AdCard imgURL={["/assets/aplikacja.png", "/assets/aplikacja@2x.png"]}>
        <Ad accent="red">
          <h2>UberEats</h2>
          <p>
            Zamawiaj w aplikacji <span> 10% </span> taniej. Pobierz aplikację
            UberEats już dziś.
          </p>
          <div>
            <a href="#">
              <img role="shop-link" src="/assets/App_Store_(iOS).svg" />
            </a>
            <a href="#">
              <img role="shop-link" src="/assets/Group 4.svg" />
            </a>
            <a href="#">
              <img
                role="shop-link"
                src="/assets/huawei-app-badge-9757fa 2.svg"
              />
            </a>
          </div>
        </Ad>
      </AdCard>
    </div>
  );
}

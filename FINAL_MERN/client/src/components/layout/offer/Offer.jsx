import React from "react";
import styles from "./Offer.module.scss";

export default function Offer({ data }) {
  return (
    <div className={styles.offerWrapper}>
      <header>
        <span>Offer</span>
        <h2>We Offer Organic For You</h2>
      </header>
      <div className={styles.content}>{data}</div>
    </div>
  );
}

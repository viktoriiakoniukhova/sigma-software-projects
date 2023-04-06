import React from "react";
import styles from "./HeaderCard.module.scss";
import Button from "../button/Button";

export default function HeaderCard({ type, span, h, imgUrl, textColor }) {
  const isMain = type === "main";
  const isColorBase = textColor === "base";
  return (
    <div
      className={`${styles.headerCard} ${
        isMain ? styles.headerCardMain : styles.headerCardSide
      }`}
    >
      <img src={imgUrl} alt={span} />
      <div className={styles.headerCardContent}>
        <span className={isColorBase ? styles.base : styles.white}>{span}</span>
        <h2 className={isColorBase ? styles.base : styles.white}>{h}</h2>
        {isMain && <Button type="yellow" hasArrow={true} text="Explore Now" />}
      </div>
    </div>
  );
}

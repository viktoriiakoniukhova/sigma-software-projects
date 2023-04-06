import React from "react";
import styles from "./Button.module.scss";
import arrow from "../../../assets/arrow.svg";

export default function Button({ text, type, hasArrow, onClick }) {
  return (
    <button className={styles[type]} onClick={onClick}>
      {text}
      {hasArrow && <img src={arrow} alt="arrow"></img>}
    </button>
  );
}

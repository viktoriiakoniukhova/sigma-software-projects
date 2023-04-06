import React from "react";
import styles from "./Newsletter.module.scss";
import newsletter1 from "../../../assets/newsletter-1.png";
import Button from "../../ui/button/Button";

export default function Newsletter() {
  return (
    <div className={styles.newsletterWrapper}>
      <div className={styles.imgContainer}>
        <img src={newsletter1} alt="newsletter-bg" />
      </div>
      <div className={styles.content}>
        <h3>Subscribe to our Newsletter</h3>
        <form action="/">
          <input type="text" placeholder="Your Email Address" />
          <Button hasArrow={false} type="darkBlue" text="Subscribe" />
        </form>
      </div>
    </div>
  );
}

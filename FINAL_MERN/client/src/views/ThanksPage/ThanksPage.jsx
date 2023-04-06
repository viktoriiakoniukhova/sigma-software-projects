import React from "react";
import thanks1 from "../../assets/thanks-1.png";
import styles from "./ThanksPage.module.scss";

export default function ThanksPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.thanksWrapper}>
      <h2>Thank you for your order</h2>
      <div className={styles.imgContainer}>
        <img src={thanks1} alt="cart-banner" />
      </div>
    </div>
  );
}

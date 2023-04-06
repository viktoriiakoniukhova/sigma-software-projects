import React from "react";
import styles from "./Econis.module.scss";
import econis1 from "../../../assets/econis-1.png";

export default function Econis() {
  return (
    <div className={styles.econisWrapper}>
      <div className={styles.imgContainer}>
        <img src={econis1} alt="eco-landscape" />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <header>
            <span>Eco Friendly</span>
            <h2>Econis is a Friendly Organic Store</h2>
          </header>
          <section>
            <h3>Start with Our Company First</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremque laudantium. Sed ut perspiciatis.
            </p>
          </section>
          <section>
            <h3>Learn How to Grow Yourself</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremque laudantium. Sed ut perspiciatis.
            </p>
          </section>
          <section>
            <h3>Farming Strategies of Today</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremque laudantium. Sed ut perspiciatis.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

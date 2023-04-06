import React from "react";
import styles from "./Categories.module.scss";
import cat1 from "../../../assets/categories-1.png";
import cat2 from "../../../assets/categories-2.png";
import cat3 from "../../../assets/categories-3.png";

function CategoryCard({ imgUrl, text }) {
  return (
    <div className={styles.categoryCard}>
      <div className={styles.imgContainer}>
        <img src={imgUrl} alt={text} />
      </div>
      <div className={styles.content}>
        <h3>{text}</h3>
      </div>
    </div>
  );
}

export default function Categories() {
  return (
    <div className={styles.categoriesWrapper}>
      <CategoryCard imgUrl={cat1} text="Organic Juice" />
      <CategoryCard imgUrl={cat2} text="Organic Food" />
      <CategoryCard imgUrl={cat3} text="Nuts Cookies" />
    </div>
  );
}

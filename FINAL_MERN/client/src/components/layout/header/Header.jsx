import React from "react";
import HeaderCard from "../../ui/headerCard/HeaderCard";
import styles from "./Header.module.scss";
import img1 from "../../../assets/header-1.png";
import img2 from "../../../assets/header-2.png";
import img3 from "../../../assets/header-3.png";

export default function Header() {
  return (
    <header id="home">
      <div className={styles.mainBanner}>
        <HeaderCard
          type="main"
          span="100% Natural Food"
          h="Choose the best healthier way of life"
          imgUrl={img1}
          textColor="base"
        />
      </div>
      <div className={styles.sideBanners}>
        <HeaderCard
          type="side"
          span="Natural!!"
          h="Get Garden Fresh Fruits"
          imgUrl={img2}
          textColor="white"
        />
        <HeaderCard
          type="side"
          span="Offer!!"
          h="Get 10% off on Vegetables"
          imgUrl={img3}
          textColor="base"
        />
      </div>
    </header>
  );
}

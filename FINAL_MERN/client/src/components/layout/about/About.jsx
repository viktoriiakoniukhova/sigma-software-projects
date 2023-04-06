import React from "react";
import styles from "./About.module.scss";
import about1 from "../../../assets/about-1.png";
import about2 from "../../../assets/about-2.png";
import about3 from "../../../assets/about-3.png";
import Button from "../../ui/button/Button";

export default function About() {
  return (
    <div className={styles.aboutWrapper} id="about">
      <div className={styles.imgContainer}>
        <img src={about1} alt="about" />
      </div>
      <div className={styles.contentContainer}>
        <header>
          <span>About Us</span>
          <h2>We Believe in Working Accredited Farmers</h2>
          <p>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
        </header>
        <div className={styles.content}>
          <div className={styles.contentCard}>
            <div className={styles.imgContainer}>
              <img src={about2} alt="organic" />
            </div>
            <div className={styles.contentCardInfo}>
              <h3>Organic Foods Only</h3>
              <p>
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum
              </p>
            </div>
          </div>
          <div className={styles.contentCard}>
            <div className={styles.imgContainer}>
              <img src={about3} alt="quality" />
            </div>
            <div className={styles.contentCardInfo}>
              <h3>Quality Standards</h3>
              <p>
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum
              </p>
            </div>
          </div>
          <Button type="darkBlue" hasArrow={true} text="Shop Now" />
        </div>
      </div>
    </div>
  );
}

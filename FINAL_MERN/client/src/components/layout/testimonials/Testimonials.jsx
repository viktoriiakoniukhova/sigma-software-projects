import React from "react";
import styles from "./Testimonials.module.scss";
import testimonials1 from "../../../assets/testimonials-1.png";
import TestimonialsSwiper from "../../ui/swiper/TestimonialsSwiper";

function TestimonialCircle({ h2, text }) {
  return (
    <div className={styles.testimonialCircle}>
      <h2>{h2}</h2>
      <p>{text}</p>
    </div>
  );
}

export default function Testimonials() {
  return (
    <div className={styles.testimonialsWrapper}>
      <div className={styles.imgContainer}>
        <img src={testimonials1} alt="testimonials-bg" />
      </div>
      <div className={styles.content}>
        <header>
          <span>Testomonial</span>
          <h2>What Our Customer Saying?</h2>
        </header>
        <div className={styles.swiperContainer}>
          <TestimonialsSwiper />
        </div>
        <div className={styles.divider}></div>
        <div className={styles.testimonialsStats}>
          <TestimonialCircle h2="100%" text="Organic" />
          <TestimonialCircle h2="285" text="Active Product" />
          <TestimonialCircle h2="350+" text="Organic Orchads" />
          <TestimonialCircle h2="25+" text="Years of Farming" />
        </div>
      </div>
    </div>
  );
}

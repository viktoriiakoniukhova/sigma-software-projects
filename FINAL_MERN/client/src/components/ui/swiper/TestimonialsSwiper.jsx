import React from "react";
import styles from "./TestimonialsSwiper.module.scss";
import rating from "../../../assets/rating.svg";
import testimonialsUser from "../../../assets/testimonials-user.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";

function TestimonialCard({ imgUrl, text, name, role }) {
  return (
    <div className={styles.testimonialCard}>
      <div className={`${styles.imgContainer} ${styles.userImgContainer}`}>
        <img src={imgUrl} alt={name} />
      </div>
      <div className={styles.imgContainer}>
        <img src={rating} alt={name} />
      </div>
      <p>{text}</p>
      <h2>{name}</h2>
      <p>{role}</p>
    </div>
  );
}
export default function TestimonialsSwiper() {
  const userData = {
    imgUrl: testimonialsUser,
    name: "Sara Taylor",
    role: "Consumer",
    text: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
  };

  return (
    <Swiper
      pagination={true}
      modules={[Pagination]}
      loop={true}
      className={styles.tSwiper}
    >
      <SwiperSlide className={styles.tSwiperSlide}>
        <TestimonialCard {...userData} />
      </SwiperSlide>
      <SwiperSlide className={styles.tSwiperSlide}>
        <TestimonialCard {...userData} />
      </SwiperSlide>
      <SwiperSlide className={styles.tSwiperSlide}>
        <TestimonialCard {...userData} />
      </SwiperSlide>
      <SwiperSlide className={styles.tSwiperSlide}>
        <TestimonialCard {...userData} />
      </SwiperSlide>
      <SwiperSlide className={styles.tSwiperSlide}>
        <TestimonialCard {...userData} />
      </SwiperSlide>
      <SwiperSlide className={styles.tSwiperSlide}>
        <TestimonialCard {...userData} />
      </SwiperSlide>
    </Swiper>
  );
}

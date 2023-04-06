import React from "react";
import styles from "./News.module.scss";
import news1 from "../../../assets/news-1.png";
import news2 from "../../../assets/news-2.png";
import user from "../../../assets/news-user.png";
import Button from "../../ui/button/Button";

function NewsCard({ imgUrl, h3, userName, date, text }) {
  return (
    <div className={styles.newsCardWrapper}>
      <div className={styles.imgContainer}>
        <img src={imgUrl} alt={h3} />
      </div>
      <div className={styles.date}>
        <h3>{date}</h3>
      </div>
      <div className={styles.content}>
        <div className={styles.postedBy}>
          <img src={user} alt="user-icon" />
          <p>By {userName}</p>
        </div>
        <div className={styles.newsContent}>
          <h3>{h3}</h3>
          <p>{text}</p>
        </div>
        <Button hasArrow={true} type="yellow" text="Read More" />
      </div>
    </div>
  );
}

export default function News() {
  return (
    <div className={styles.wrapper} id="news">
      <header>
        <h2>Discover weekly content about organic food, & more</h2>
        <Button hasArrow={true} type="white" text="More News" />
      </header>
      <div className={styles.newsWrapper}>
        <NewsCard
          date="25 Nov"
          h3="The Benefits of Vitamin D & How to Get It"
          imgUrl={news1}
          userName="Rachi Card"
          text="Simply dummy text of the printing and typesetting industry. Lorem Ipsum"
        />
        <NewsCard
          date="25 Nov"
          h3="Our Favourite Summertime Tommeto"
          imgUrl={news2}
          userName="Rachi Card"
          text="Simply dummy text of the printing and typesetting industry. Lorem Ipsum"
        />
      </div>
    </div>
  );
}

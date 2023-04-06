import React from "react";
import styles from "./ProductCard.module.scss";
import rating from "../../../assets/rating.svg";
import currencyFilter from "../../../filters/currency.filter";
import useModal from "../../../hooks/useModal";
import Modal from "../Modal/Modal";

export default function ProductCard({
  id,
  category,
  desc,
  discount,
  imgUrl,
  name,
  price,
  quantity,
  cartProducts,
  setCartProducts,
}) {
  const hasDiscount = discount.percent !== 0;
  const calcDiscount = (price * discount.percent) / 100;
  const priceWithDiscount = price - calcDiscount;
  const newImgUrl = window.location.origin + imgUrl.slice(1);

  // Modal window params
  const { isShowing, toggle } = useModal();

  const dataForModal = {
    id: id,
    category: category,
    desc: desc,
    discount: calcDiscount,
    imgUrl: newImgUrl,
    name: name,
    price: priceWithDiscount,
    quantity: quantity,
    cartProducts: cartProducts,
    setCartProducts: setCartProducts,
  };

  return (
    <div className={styles.productCardWrapper} onClick={toggle}>
      <div className={styles.productCard}>
        <div
          className={styles.imgContainer}
          style={{ backgroundImage: `url(${newImgUrl})` }}
        >
          <div className={styles.categoryInfo}>
            <p>{category.name}</p>
          </div>
        </div>
        <div className={styles.content}>
          <h3>{name}</h3>
          <div className={styles.divider}></div>
          <div className={styles.contentInfo}>
            <div className={styles.price}>
              {hasDiscount && (
                <p className={styles.discountPrice}>
                  <s>{currencyFilter(price)}</s>
                </p>
              )}
              <h3>{currencyFilter(priceWithDiscount)}</h3>
            </div>
            <div className={styles.imgContainer}>
              <img src={rating} alt="rate" />
            </div>
          </div>
        </div>
      </div>
      <Modal hide={toggle} isShowing={isShowing} productData={dataForModal} />
    </div>
  );
}

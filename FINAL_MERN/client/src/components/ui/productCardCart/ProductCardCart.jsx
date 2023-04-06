import React from "react";
import styles from "./ProductCardCart.module.scss";
import currencyFilter from "../../../filters/currency.filter";
import Button from "../button/Button";

export default function ProductCardCart({
  id,
  category,
  desc,
  discount,
  imgUrl,
  name,
  price,
  quantity,
  setCartProducts,
}) {
  const hasDiscount = discount.percent !== 0;
  const priceWithDiscount = price - (price * discount.percent) / 100;
  const newImgUrl = window.location.origin + imgUrl.slice(1);

  const removeFromCart = () => {
    setCartProducts((prevCartList) =>
      prevCartList.filter((cartItem) => cartItem.id !== id)
    );
  };
  return (
    <div className={styles.productCardWrapper}>
      <div className={styles.productCard}>
        <div
          className={styles.imgContainer}
          style={{ backgroundImage: `url(${newImgUrl})` }}
        ></div>
        <div className={styles.content}>
          <h3>{name}</h3>
          <div className={styles.contentInfo}>
            <div className={styles.price}>
              {hasDiscount && (
                <p className={styles.discountPrice}>
                  <s>{currencyFilter(price)}</s>
                </p>
              )}
              <h3>{currencyFilter(priceWithDiscount)}</h3>
            </div>
            <div className={styles.quantity}>
              <h3>Quantity:</h3>
              <input type="text" placeholder={quantity} disabled />
            </div>
          </div>
        </div>
      </div>
      <Button
        type="darkBlue"
        hasArrow={false}
        text="X"
        onClick={removeFromCart}
      />
    </div>
  );
}

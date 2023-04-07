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
  orderQuantity,
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

  // const [isEnough, setIsEnough] = React.useState(true);

  const updateQuantity = (newQuantity) => {
    const regex = /^[1-9][0-9]*$/;
    if (regex.test(newQuantity)) {
      if (newQuantity > quantity) {
        // setIsEnough((prev) => !prev);
        setCartProducts((prevCartList) => {
          return prevCartList.map((cartItem) => {
            if (cartItem.id === id)
              return {
                ...cartItem,
                orderQuantity: quantity,
              };
            else return cartItem;
          });
        });
      } else
        setCartProducts((prevCartList) => {
          return prevCartList.map((cartItem) => {
            if (cartItem.id === id)
              return {
                ...cartItem,
                orderQuantity: newQuantity,
              };
            else return cartItem;
          });
        });
    }
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
              <div className={styles.quantityData}>
                <h3>Quantity:</h3>
                <input
                  type="text"
                  placeholder={orderQuantity}
                  value={orderQuantity}
                  onChange={(e) => updateQuantity(+e.target.value)}
                />
              </div>
              <div className={styles.stock}>
                <p>In Stock: {quantity}</p>
              </div>
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

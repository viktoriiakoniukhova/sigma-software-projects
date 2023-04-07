import React from "react";
import ReactDOM from "react-dom";
import rating from "../../../assets/rating.svg";
import currencyFilter from "../../../filters/currency.filter";
import Button from "../button/Button";
import styles from "./Modal.module.scss";

export default function Modal({ isShowing, hide, productData }) {
  const {
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
  } = productData;

  const hasDiscount = discount.percent !== 0;
  const [info, setInfo] = React.useState("desc"); //Radiobutton

  // Add/Update Cart Products
  const [orderQuantity, setOrderQuantity] = React.useState(1);
  const [isEnough, setIsEnough] = React.useState(true);

  const updateQuantity = (newQuantity) => {
    const regex = /^[1-9][0-9]*$/;
    if (regex.test(newQuantity)) {
      setOrderQuantity(newQuantity);
    }
  };

  const updateCartProduct = () => {
    return cartProducts.map((product) => {
      const newQuantity = product.orderQuantity + orderQuantity;
      if (product.id === id)
        return {
          ...product,
          orderQuantity: newQuantity,
        };
      else return product;
    });
  };

  const addCartProduct = () => {
    return [...cartProducts, { id: id, orderQuantity: orderQuantity }];
  };

  const addToCart = () => {
    const isEmptyCart = cartProducts.length === 0;
    const cartQuantity = () => {
      if (!isEmptyCart && cartProducts.filter((prod) => prod.id === id).length)
        return cartProducts.filter((prod) => prod.id === id)[0].orderQuantity;
      else return 0;
    };
    const isEnoughProduct = cartQuantity() + orderQuantity <= quantity;
    const hasNotProduct =
      cartProducts.filter((prod) => prod.id === id).length === 0;

    isEnoughProduct
      ? isEmptyCart || hasNotProduct
        ? setCartProducts(addCartProduct())
        : setCartProducts(updateCartProduct())
      : setIsEnough(false);

    setOrderQuantity(1);
  };
  return (
    <>
      {isShowing
        ? ReactDOM.createPortal(
            <React.Fragment>
              <div className={styles.modalOverlay} />
              <div className={styles.modalWrapper} tabIndex={-1} role="dialog">
                <div
                  className={styles.modal}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className={styles.modalHeader}>
                    <Button
                      type="darkBlue"
                      hasArrow={false}
                      text="×"
                      onClick={hide}
                    />
                  </div>
                  <div className={styles.productCardDetails}>
                    <div className={styles.productCardDetailsContent}>
                      <div
                        className={styles.imgContainer}
                        style={{ backgroundImage: `url(${imgUrl})` }}
                      >
                        <div className={styles.categoryInfo}>
                          <p>{category.name}</p>
                        </div>
                      </div>
                      <div className={styles.content}>
                        <h3>{name}</h3>
                        <div className={styles.imgContainer}>
                          <img src={rating} alt="rate" />
                        </div>
                        <div className={styles.contentInfo}>
                          <div className={styles.price}>
                            {hasDiscount && (
                              <p className={styles.discountPrice}>
                                <s>{currencyFilter(price + discount)}</s>
                              </p>
                            )}
                            <h3>{currencyFilter(price)}</h3>
                          </div>
                          <p>{desc}</p>
                          <div className={styles.quantity}>
                            <h3>Quantity:</h3>
                            <input
                              type="text"
                              placeholder={orderQuantity}
                              value={orderQuantity}
                              onChange={(e) => updateQuantity(+e.target.value)}
                            />
                            {!isEnough && <p>Sorry, not enough product.</p>}
                            <Button
                              hasArrow={true}
                              type="darkBlue"
                              text="Add To Cart"
                              onClick={addToCart}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.productCardDetailsInfo}>
                      <div className={styles.productCardInfoRadio}>
                        <input
                          type="radio"
                          name="info"
                          value="desc"
                          id="desc"
                          checked={info === "desc"}
                          onChange={(e) => setInfo(e.target.value)}
                        />
                        <label
                          className={
                            info === "desc" ? `${styles.active}` : undefined
                          }
                          htmlFor="desc"
                        >
                          <h3>Product Description</h3>
                        </label>
                        <input
                          type="radio"
                          name="info"
                          value="add"
                          id="add"
                          checked={info === "add"}
                          onChange={(e) => setInfo(e.target.value)}
                        />
                        <label
                          className={
                            info === "add" ? `${styles.active}` : undefined
                          }
                          htmlFor="add"
                        >
                          <h3>Additional Info</h3>
                        </label>
                      </div>
                      <p>{info === "desc" ? desc : category.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>,
            document.body
          )
        : null}
    </>
  );
}

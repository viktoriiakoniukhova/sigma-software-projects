import React from "react";
import cart1 from "../../assets/cart-1.png";
import Button from "../../components/ui/button/Button";
import styles from "./CartPage.module.scss";
import FormOrder from "../../components/ui/formOrder/FormOrder";
import ProductCardCart from "../../components/ui/productCardCart/ProductCardCart";
import { useCartProducts } from "../../App";
import currencyFilter from "../../filters/currency.filter";
import { Link, useLocation } from "react-router-dom";

export default function CartPage() {
  const [cartProducts, setCartProducts] = useCartProducts();

  // Store fetched products data
  const URL = "http://localhost:3001/products";
  const [productsData, setProductsData] = React.useState([]);

  React.useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setProductsData(data));
  }, []);

  // Scroll to top
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const location = useLocation(); // For navigation to "Products" section of Main Page

  const productsInCartData = productsData.filter(function (o1) {
    return cartProducts.some(function (o2) {
      o1.orderQuantity = o2.orderQuantity;
      return o1._id === o2.id; // return the ones with equal id
    });
  });

  const totalDiscount = productsInCartData.reduce(
    (accum, cur) =>
      accum + (cur.price * cur.discount.percent * cur.orderQuantity) / 100,
    0
  );
  const totalPrice = productsInCartData.reduce(
    (accum, cur) => accum + cur.price * cur.orderQuantity,
    0
  );

  const productsInCart = productsInCartData.map((productData) => (
    <ProductCardCart
      key={productData._id}
      id={productData._id}
      category={productData.category}
      desc={productData.desc}
      discount={productData.discount}
      imgUrl={productData.imgUrl}
      name={productData.name}
      price={productData.price}
      quantity={productData.quantity}
      orderQuantity={productData.orderQuantity}
      setCartProducts={setCartProducts}
    />
  ));

  const [isFormHidden, setIsFormHidden] = React.useState(true);

  const showForm = () => {
    setIsFormHidden((prevIsFormHidden) => !prevIsFormHidden);
  };

  return (
    <div className={styles.cartWrapper}>
      <div className={styles.imgContainer}>
        <img src={cart1} alt="cart-banner" />
      </div>
      <div className={styles.cartContent}>
        {cartProducts.length ? (
          <div className={styles.cartProductsWrapper}>
            <div className={styles.cartProductsList}>{productsInCart}</div>
            {totalPrice !== 0 && (
              <div className={styles.cartProductsTotals}>
                <h3>Total price: {currencyFilter(totalPrice)}</h3>
                <h3>Total discount: {currencyFilter(totalDiscount)}</h3>
              </div>
            )}
            {totalPrice !== 0 ? (
              <Button
                hasArrow={true}
                type="darkBlue"
                text="To Order"
                onClick={showForm}
              />
            ) : (
              <h3>You should have at least 1 product to complete an order.</h3>
            )}
          </div>
        ) : (
          <div className={styles.emptyCart}>
            <h3>
              Your cart is empty. Go
              <Link
                to="/"
                className={styles.linkToProducts}
                state={{ from: location }}
              >
                shopping
              </Link>
            </h3>
          </div>
        )}
        {!isFormHidden && (
          <FormOrder
            orderProducts={productsInCartData}
            setCartProducts={setCartProducts}
            totalDiscount={totalDiscount}
            totalPrice={totalPrice}
          />
        )}
      </div>
    </div>
  );
}

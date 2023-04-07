import React from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import logo from "../../../assets/logo.svg";
import search from "../../../assets/search.svg";
import cart from "../../../assets/cart.svg";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <a href="#about">About</a>
      <a href="#">Pages</a>
      <a href="#products">Products</a>
      <a href="#news">News</a>
    </nav>
  );
}

export default function Navbar({ cartProducts }) {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const cartProductsAmount = cartProducts.reduce(
    (accum, cur) => accum + +cur.orderQuantity,
    0
  );
  return (
    <div className={styles.navWrapper}>
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="logo" />
        <h3>Organick</h3>
      </Link>
      <div className={styles.navLinks}>
        <Nav />
      </div>
      <div className={styles.sideMenu}>
        <div className={styles.search}>
          <input type="text" />
          <div className={styles.searchIcon}>
            <img src={search} alt="search" />
          </div>
        </div>
        <Link to="/cart" className={styles.cart}>
          <div className={styles.cartIcon}>
            <img src={cart} alt="cart" />
          </div>
          <h5>
            Cart:
            <span
              style={
                !cartProductsAmount
                  ? { color: "inherit" }
                  : { color: "#ff0000" }
              }
            >
              ({cartProductsAmount})
            </span>
          </h5>
        </Link>
        {/* </div> */}
      </div>
      <div className={styles.burgerMenu}>
        {toggleMenu ? (
          <RiCloseLine
            color="#fffffff"
            size={27}
            onClick={() => setToggleMenu((prevToggle) => !prevToggle)}
          />
        ) : (
          <RiMenu3Line
            color="#fffffff"
            size={27}
            onClick={() => setToggleMenu((prevToggle) => !prevToggle)}
          />
        )}
        {toggleMenu && (
          <div className={styles.menu}>
            <div className={styles.navLinks}>
              <Nav />
            </div>
            <div className={styles.sideMenu}>
              <div className={styles.search}>
                <input type="text" />
                <div className={styles.searchIcon}>
                  <img src={search} alt="search" />
                </div>
              </div>
              <Link to="/cart" className={styles.cart}>
                <div className={styles.cartIcon}>
                  <img src={cart} alt="cart" />
                </div>
                <h5>
                  Cart:
                  <span
                    style={
                      !cartProductsAmount
                        ? { color: "inherit" }
                        : { color: "#ff0000" }
                    }
                  >
                    ({cartProductsAmount})
                  </span>
                </h5>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

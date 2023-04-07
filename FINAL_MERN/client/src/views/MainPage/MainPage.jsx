import React from "react";
import Header from "../../components/layout/header/Header";
import About from "../../components/layout/about/About";
import Products from "../../components/layout/products/Products";
import Testimonials from "../../components/layout/testimonials/Testimonials";
import Offer from "../../components/layout/offer/Offer";
import Econis from "../../components/layout/econis/Econis";
import Categories from "../../components/layout/categories/Categories";
import News from "../../components/layout/news/News";
import Newsletter from "../../components/layout/newsletter/Newsletter";
import ProductCard from "../../components/ui/productCard/ProductCard";
import { useCartProducts } from "../../App";

export default function MainPage() {
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

  const products = productsData
    .sort((product) => (product.discount.percent ? -1 : 1))
    .map((productData) => (
      <ProductCard
        key={productData._id}
        id={productData._id}
        category={productData.category}
        desc={productData.desc}
        discount={productData.discount}
        imgUrl={productData.imgUrl}
        name={productData.name}
        price={productData.price}
        quantity={productData.quantity}
        cartProducts={cartProducts}
        setCartProducts={setCartProducts}
      />
    ));

  const vegetables = productsData
    .filter((productData) => productData.category.name === "vegetable")
    .slice(0, 4)
    .map((productData) => (
      <ProductCard
        key={productData._id}
        id={productData._id}
        category={productData.category}
        desc={productData.desc}
        discount={productData.discount}
        imgUrl={productData.imgUrl}
        name={productData.name}
        price={productData.price}
        quantity={productData.quantity}
        cartProducts={cartProducts}
        setCartProducts={setCartProducts}
      />
    ));

  return (
    <div>
      <Header />
      <About />
      <Products
        data={products}
        cartProducts={cartProducts}
        setCartProducts={setCartProducts}
      />
      <Testimonials />
      <Offer data={vegetables} />
      <Econis />
      <Categories />
      <News />
      <Newsletter />
    </div>
  );
}

import React from "react";
import "./App.scss";
import Navbar from "./components/ui/navbar/Navbar";
import Footer from "./components/layout/footer/Footer";
import { Outlet, useOutletContext } from "react-router-dom";

function App() {
  // Store products in cart in localstorage
  const [cartProducts, setCartProducts] = React.useState(() => {
    const storedValue = localStorage.getItem("cartProducts");
    const initialValue = JSON.parse(storedValue);
    return initialValue || [];
  });

  React.useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }, [cartProducts]);

  return (
    <>
      <div className="App">
        <Navbar cartProducts={cartProducts} />
        <Outlet context={[cartProducts, setCartProducts]} />
        <Footer />
      </div>
    </>
  );
}

export default App;

export function useCartProducts() {
  return useOutletContext();
}

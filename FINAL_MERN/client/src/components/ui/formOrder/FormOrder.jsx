import React from "react";
import styles from "./FormOrder.module.scss";
import Button from "../../../components/ui/button/Button";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

export default function FormOrder({
  orderProducts,
  setCartProducts,
  totalPrice,
  totalDiscount,
}) {
  const URL = "http://localhost:3001/insert";

  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    fname: "",
    email: "",
    address: "",
    phone: "",
    message: "",
  });

  const orderProductsToPost = orderProducts.map((product) => {
    const discount = (product.price * product.discount.percent) / 100;
    const priceWithDiscount = product.price - discount;
    return {
      productId: product._id,
      productName: product.name,
      price: priceWithDiscount,
      discount: discount,
      quantity: product.quantity,
    };
  });

  const handleSubmit = (e) => {
    alert("Ordered by: " + formData.fname);
    e.preventDefault();
    const dataToPost = {
      ...formData,
      totalCost: totalPrice,
      totalDiscount: totalDiscount,
      orderProducts: orderProductsToPost,
    };
    Axios.post(URL, dataToPost);
    setCartProducts([]);
    navigate("/thanks", { replace: true });
  };

  const handleChange = (e) => {
    setFormData((prevFormData) => {
      const { name, value } = e.target;
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };
  return (
    <div className={styles.formOrder}>
      <form onSubmit={handleSubmit}>
        <label>
          <h3>Full Name*</h3>
          <input
            type="text"
            placeholder="Full Name"
            name="fname"
            value={formData.fname}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <h3>Email*</h3>
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <h3>Address*</h3>
          <input
            type="text"
            placeholder="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <h3>Phone*</h3>
          <input
            type="text"
            placeholder="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>
        <label className={styles.textareaInput}>
          <h3>Message</h3>
          <textarea
            type="text"
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </label>
        <Button hasArrow={false} type="darkBlue" text={"Confirm"} />
      </form>
    </div>
  );
}

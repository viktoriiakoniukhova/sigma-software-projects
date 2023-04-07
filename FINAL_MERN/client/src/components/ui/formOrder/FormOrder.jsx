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
  const [errors, setErrors] = React.useState({
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
      quantity: product.orderQuantity,
    };
  });

  const handleSubmit = (e) => {
    const hasErrors =
      errors.email.length ||
      errors.fname.length ||
      errors.phone.length ||
      errors.address.length ||
      errors.message.length;

    if (!hasErrors) {
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
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const regexp = () => {
      switch (name) {
        case "fname":
          return /^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/;
        case "email":
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        case "phone":
          return /^\+380\d{3}\d{2}\d{2}\d{2}$/;
        default:
          return;
      }
    };

    !value.match(regexp())
      ? setErrors((prevErrorsData) => {
          return {
            ...prevErrorsData,
            [name]: `${name} is not valid`,
          };
        })
      : setErrors((prevErrorsData) => {
          return {
            ...prevErrorsData,
            [name]: "",
          };
        });

    setFormData((prevFormData) => {
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
          <h3>Full Name (english)*</h3>
          <input
            type="text"
            placeholder="Full Name"
            name="fname"
            value={formData.fname}
            onChange={handleChange}
            required
          />
          <span>{errors.fname}</span>
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
          <span>{errors.email}</span>
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
          <span>{errors.phone}</span>
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

import React, { useRef } from "react";
import styles from "./Products.module.scss";
import Button from "../../ui/button/Button";

export default function Products({ data }) {
  const halfLength = Math.ceil(data.length / 2);
  const dataLeft = data.slice(0, halfLength);
  const dataRight = data.slice(halfLength);
  const [isFold, setIsFold] = React.useState(true);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ref = useRef();
  React.useEffect(() => {
    if (isFold) window.scrollTo(0, ref.current.offsetTop);
  }, [isFold]);

  return (
    <div className={styles.productsWrapper} id="products" ref={ref}>
      <div className={styles.productsList}>
        {dataLeft}
        {!isFold && dataRight}
      </div>
      <Button
        hasArrow={true}
        type="darkBlue"
        text={isFold ? "Show All" : "Hide All"}
        onClick={() => setIsFold((prevIsFold) => !prevIsFold)}
      />
    </div>
  );
}

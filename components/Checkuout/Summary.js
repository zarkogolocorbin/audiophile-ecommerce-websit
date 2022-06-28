import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import SummaryItem from "./SummaryItem";
import styles from "../../styles/summary.module.css";

export default function SummaryComponent({ submit, setDone }) {
  const { cartItems } = useContext(CartContext);

  const handleClick = () => {
    submit();
  };

  let totalPrice =
    cartItems.length > 0
      ? cartItems
          .map((item) => item.product.price * item.quantity)
          .reduce((a, b) => a + b)
      : 0;

  return (
    <div className={styles.summary}>
      <h2>Summary</h2>
      <div className={styles["summary-items"]}>
        {cartItems &&
          cartItems.map((item, index) => {
            return <SummaryItem key={index} item={item} />;
          })}
      </div>
      <div className={styles["pay-info"]}>
        <div>
          <p className={styles["light-text"]}>TOTAL</p>
          <p className={styles["dark-text"]}>$ {totalPrice}</p>
        </div>
        <div>
          <p className={styles["light-text"]}>SHIPPING</p>
          <p className={styles["dark-text"]}>$ 50</p>
        </div>
        <div>
          <p className={styles["light-text"]}>VAT (INCLUDED)</p>
          <p className={styles["dark-text"]}>
            $ {Math.floor(totalPrice * 0.2)}
          </p>
        </div>
        <div className={styles["grand-total"]}>
          <p className={styles["light-text"]}>GRAND TOTAL</p>
          <p className={styles["orange-text"]}>$ {totalPrice + 50}</p>
        </div>
      </div>
      <button className="btn" type="submit" onClick={() => handleClick()}>
        Continue
      </button>
    </div>
  );
}

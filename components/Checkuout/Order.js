import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import OrderItem from "./OrderItem";
import styles from "../../styles/conformation.module.css";

export default function OrderComponent({ showLess, setShowLess }) {
  const { cartItems } = useContext(CartContext);
  let totalPrice =
    cartItems.length > 0
      ? cartItems
          .map((item) => item.product.price * item.quantity)
          .reduce((a, b) => a + b)
      : 0;

  return (
    <div className={styles["grand-order"]}>
      <div className={styles["order-items"]}>
        <div className={styles["order-item-flex"]}>
          {!showLess ? (
            cartItems.map((item, index) => {
              return <OrderItem item={item} key={index} />;
            })
          ) : (
            <OrderItem item={cartItems[0]} />
          )}
        </div>
        {cartItems.length > 1 && (
          <button onClick={() => setShowLess(!showLess)}>
            {!showLess
              ? "View less"
              : `and ${cartItems.length - 1} other item(s)`}
          </button>
        )}
      </div>
      <div className={styles["grand-total"]}>
        <h2>GRAND TOTAL</h2>
        <p>$ {totalPrice + 50}</p>
      </div>
    </div>
  );
}

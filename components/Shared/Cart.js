import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "./CartItem";
import Link from "next/link";
import styles from "../../styles/cart.module.css";
export default function CartComponent() {
  const { cartItems, removeAll, setShowCart } = useContext(CartContext);

  return (
    <div className={styles.overlay}>
      <div className={styles["cart-center"]}>
        <div className={styles["cart-content"]}>
          <div className={styles["cart-header"]}>
            <h2>Cart({cartItems.length})</h2>
            <button onClick={() => removeAll()}>Remove all</button>
          </div>
          <div className={styles["cart-items"]}>
            <div className={styles["scroll-item"]}>
              {cartItems.length > 0 ? (
                cartItems.map((item, index) => {
                  return <CartItem item={item} key={index} />;
                })
              ) : (
                <div className={styles["empty-cart"]}>
                  <p>CART EMPTY</p>
                </div>
              )}
            </div>
            <div className={styles["cover-bar"]}></div>
          </div>
          <div className={styles["total-amount"]}>
            <h2>TOTAL</h2>
            <span>
              ${" "}
              {cartItems.length !== 0
                ? cartItems
                    .map((item) => item.product.price * item.quantity)
                    .reduce((a, b) => a + b)
                : 0}
            </span>
          </div>
          <div className={styles.checkout}>
            <Link href="/checkout" passHref>
              <button
                className={`btn ${cartItems.length < 1 ? "disabled" : ""}`}
                onClick={() => setShowCart(false)}
                disabled={cartItems.length < 1 ? true : false}
              >
                checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

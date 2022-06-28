import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Image from "next/image";
import styles from "../../styles/cart.module.css";
import ToggleButton from "./ToggleButton";

export default function CartItem({ item }) {
  const { incrementQtyInCart, decrementQtyInCart } = useContext(CartContext);

  const decrement = () => {
    decrementQtyInCart(item.product.id);
  };
  const increment = () => {
    incrementQtyInCart(item.product.id);
  };

  return (
    <div className={styles["cart-item"]}>
      <Image src={item.product.image} width={64} height={64} alt="product" />
      <div>
        <p className={styles["cart-name"]}>{item.product.name}</p>
        <p className={styles["cart-price"]}>
          $ {item.product.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
        </p>
      </div>
      <ToggleButton
        counter={"cart"}
        quantity={item.quantity}
        decrement={decrement}
        increment={increment}
      />
    </div>
  );
}

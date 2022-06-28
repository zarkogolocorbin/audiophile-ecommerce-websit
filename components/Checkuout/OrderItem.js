import Image from "next/image";
import styles from "../../styles/conformation.module.css";
export default function OrderItem({ item }) {
  return (
    item && (
      <div className={styles["order-item"]}>
        <Image src={item.product.image} width={50} height={50} alt="image" />
        <div>
          <p className={styles["name"]}>{item.product.name}</p>
          <p className={styles["price"]}>$ {item.product.price}</p>
        </div>
        <p className={styles["quantity"]}>X {item.quantity}</p>
      </div>
    )
  );
}

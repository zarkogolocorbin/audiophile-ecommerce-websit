import Image from "next/image";
import styles from "../../styles/summary.module.css";
export default function SummaryItem({ item }) {
  return (
    <div className={styles["summary-item"]}>
      <Image src={item.product.image} width={64} height={64} alt="some txt" />
      <div className={styles["item-details"]}>
        <span className={styles.name}>{item.product.name}</span>
        <span className={styles.price}>$ {item.product.price}</span>
      </div>
      <h3>X{item.quantity}</h3>
    </div>
  );
}

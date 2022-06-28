import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import styles from "../../styles/productDetails.module.css";
import Image from "next/image";
import ToggleButton from "../Shared/ToggleButton";

export default function ProductDetailsComponent({ data }) {
  const { qty, incrementQty, decrementQty, onAdd } = useContext(CartContext);

  const product = {
    id: data.id,
    name: data.name,
    price: data.price,
    image: data.smallMainImage,
  };

  return (
    <section className={styles["product-details"]}>
      <div className={styles["product-largeImage"]}>
        <Image src={data.largeMainImage} width={540} height={560} alt="" />
      </div>
      <div className={styles["product-mediumImage"]}>
        <Image src={data.mediumMainImage} width={689} height={352} alt="" />
      </div>
      <div className={styles["product-smallImage"]}>
        <Image src={data.smallMainImage} width={560} height={540} alt="" />
      </div>
      <div className={styles["details-content"]}>
        <h1>
          {data.model} {data.name}
        </h1>
        <p>{data.description}</p>
        <div className={styles.price}>
          <span>$</span>
          <p>{data.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}</p>
        </div>
        <div className={styles["addToCard-button"]}>
          <ToggleButton
            counter={"product"}
            decrement={decrementQty}
            increment={incrementQty}
            quantity={qty}
          />
          <button className="btn" onClick={() => onAdd(product, qty)}>
            ADD TO CARD
          </button>
        </div>
      </div>
    </section>
  );
}

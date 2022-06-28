import ProductCardComponent from "./ProductCard";
import styles from "../../styles/productCard.module.css";

export default function ProductCardsComponent({ data }) {
  return (
    <section className={styles["product-cards"]}>
      {data.products.map((item, index) => {
        return <ProductCardComponent item={item} key={index} />;
      })}
    </section>
  );
}

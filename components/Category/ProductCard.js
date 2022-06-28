import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/productCard.module.css";

export default function ProductCardComponent({ item }) {
  return (
    <article className={styles["product-card"]}>
      <div className={styles["small-productImage"]}>
        <Image src={item.smallMainImage} width={560} height={540} alt="" />
      </div>
      <div className={styles["medium-productImage"]}>
        <Image src={item.mediumMainImage} width={689} height={352} alt="" />
      </div>
      <div className={styles["large-productImage"]}>
        <Image src={item.largeMainImage} width={560} height={540} alt="" />
      </div>
      <div className={styles["product-content"]}>
        {item.new ? (
          <p className={styles["new-products"]}>new product</p>
        ) : null}
        <h1>
          {item.model} {item.name}
        </h1>
        <p>{item.description}</p>
        <Link href={`/product/${item.slug}`}>
          <a>SEE PRODUCT</a>
        </Link>
      </div>
    </article>
  );
}

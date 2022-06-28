import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/categoriesCards.module.css";

export default function CategoriesCardsComponent() {
  const { setIsSidebarOpen } = useContext(CartContext);
  return (
    <section className={styles["categories-cards"]}>
      <article className={styles.card}>
        <div className={styles["card-image"]}>
          <Image
            src="/assets/shared/desktop/image-headphones.png"
            width={180}
            height={160}
            alt="image-headphones"
          />
        </div>
        <h3>HEADPHONES</h3>
        <Link href={"/category/headphones"}>
          <a onClick={() => setIsSidebarOpen(false)}>
            SHOP
            <Image
              src="/assets/shared/icon-arrow-right.svg"
              width={8}
              height={12}
              alt="right arrow"
            />
          </a>
        </Link>
      </article>
      <article className={styles.card}>
        <div className={styles["card-image"]}>
          <Image
            src="/assets/shared/desktop/image-speakers.png"
            width={180}
            height={160}
            alt="image-speakers"
          />
        </div>
        <h3>SPEAKERS</h3>
        <Link href={"/category/speakers"}>
          <a onClick={() => setIsSidebarOpen(false)}>
            SHOP
            <Image
              src="/assets/shared/icon-arrow-right.svg"
              width={8}
              height={12}
              alt="right arrow"
            />
          </a>
        </Link>
      </article>
      <article className={styles.card}>
        <div className={styles["card-image"]}>
          <Image
            src="/assets/shared/desktop/image-earphones.png"
            width={180}
            height={160}
            alt="image-earphones"
          />
        </div>
        <h3>EARPHONES</h3>
        <Link href={"/category/earphones"}>
          <a onClick={() => setIsSidebarOpen(false)}>
            SHOP
            <Image
              src="/assets/shared/icon-arrow-right.svg"
              width={8}
              height={12}
              alt="right arrow"
            />
          </a>
        </Link>
      </article>
    </section>
  );
}

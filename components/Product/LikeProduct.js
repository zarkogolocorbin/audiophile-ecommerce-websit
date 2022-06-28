import Image from "next/image";
import styles from "../../styles/productsCards.module.css";
import Link from "next/link";

export default function LikeProductComponent({ projectsLike }) {
  return (
    <section className={styles["products-cards"]}>
      <div className={styles["card-product"]}>
        <Image
          src={`${projectsLike[0].smallMainImage}`}
          width={350}
          height={318}
          alt=""
        />
        <h2>{`${projectsLike[0].name}`}</h2>
        <Link href={`/product/${projectsLike[0].slug}`}>
          <a>SEE PRODUCT</a>
        </Link>
      </div>
      <div className={styles["card-product"]}>
        <Image
          src={`${projectsLike[1].smallMainImage}`}
          width={350}
          height={318}
          alt=""
        />
        <h2>{`${projectsLike[1].name}`}</h2>
        <Link href={`/product/${projectsLike[1].slug}`}>
          <a>SEE PRODUCT</a>
        </Link>
      </div>
      <div className={styles["card-product"]}>
        <Image
          src={`${projectsLike[3].smallMainImage}`}
          width={350}
          height={318}
          alt=""
        />
        <h2>{`${projectsLike[3].name}`}</h2>
        <Link href={`/product/${projectsLike[3].slug}`}>
          <a>SEE PRODUCT</a>
        </Link>
      </div>
    </section>
  );
}

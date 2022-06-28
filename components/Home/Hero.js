import Link from "next/link";
import styles from "../../styles/hero.module.css";

export default function HeroComponent() {
  return (
    <section className={styles.hero}>
      <div className={styles["hero-center"]}>
        <div className={styles["hero-content"]}>
          <p className={styles["short-text"]}>NEW PRODUCT</p>
          <h1 className={styles["hero-title"]}>XX99 Mark II HeadphoneS</h1>
          <p className={styles["text"]}>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link href="/see">
            <a>SEE PRODUCT</a>
          </Link>
        </div>
      </div>
    </section>
  );
}

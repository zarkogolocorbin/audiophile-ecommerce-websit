import styles from "../../styles/showcase.module.css";
import Link from "next/link";
export default function SecondShowCase() {
  return (
    <section className={styles["second-showCase"]}>
      <div className={styles["second-showcase-center"]}>
        <div className={styles["second-showcase-content"]}>
          <h1>ZX7 SPEAKER</h1>
          <Link href="/">
            <a>SEE PRODUCT</a>
          </Link>
        </div>
      </div>
    </section>
  );
}

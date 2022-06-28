import Link from "next/dist/client/link";
import Image from "next/image";
import styles from "../../styles/showcase.module.css";
export default function ThirdShowCaseContent() {
  return (
    <section className={styles["third-showCase"]}>
      <div className={styles["third-showcase-center"]}>
        <div className={styles["third-showcase-desktop-image"]}>
          <Image
            src="/assets/home/desktop/image-earphones-yx1.jpg"
            width={540}
            height={320}
            alt="image"
          />
        </div>
        <div className={styles["third-showcase-tablet-image"]}>
          <Image
            src="/assets/home/tablet/image-earphones-yx1.jpg"
            width={339}
            height={320}
            alt="image"
          />
        </div>
        <div className={styles["third-showcase-mobile-image"]}>
          <Image
            src="/assets/home/mobile/image-earphones-yx1.jpg"
            width={339}
            height={320}
            alt="image"
          />
        </div>
        <div className={styles["third-showcase-content"]}>
          <h1>YX1 EARPHONES</h1>
          <Link href="/">
            <a>SEE PRODUCT</a>
          </Link>
        </div>
      </div>
    </section>
  );
}

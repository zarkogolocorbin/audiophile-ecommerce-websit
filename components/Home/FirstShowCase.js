import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/showcase.module.css";
export default function FirstShowCase() {
  return (
    <section className={styles["first-showCase"]}>
      <div className={styles["showcase-center"]}>
        <div className={styles["showcase-image-desktop"]}>
          <Image
            src="/assets/home/desktop/image-speaker-zx9.png"
            width={395}
            height={478}
            alt=""
          />
        </div>
        <div className={styles["showcase-image-tablet"]}>
          <Image
            src="/assets/home/tablet/image-speaker-zx9.png"
            width={197}
            height={237}
            alt=""
          />
        </div>
        <div className={styles["showcase-image-mobile"]}>
          <Image
            src="/assets/home/mobile/image-speaker-zx9.png"
            width={172}
            height={207}
            alt=""
          />
        </div>

        <div className={styles["showcase-content"]}>
          <h2>ZX9 SPEAKER</h2>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link href="/">
            <a>SEE PRODUCT</a>
          </Link>
        </div>
      </div>
    </section>
  );
}

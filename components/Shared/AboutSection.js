import styles from "../../styles/aboutSection.module.css";
import Image from "next/image";

export default function AboutSectionComponent() {
  return (
    <section className={styles["about-section"]}>
      <div className={styles["section-center"]}>
        <div className={styles["section-content"]}>
          <h1>
            Bringing you the <span>best</span> audio gear
          </h1>
          <p>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <div className={styles["about-image-desktop"]}>
          <Image
            src="/assets/shared/desktop/image-best-gear.jpg"
            width={540}
            height={588}
            alt="best gear image"
          />
        </div>
        <div className={styles["about-image-tablet"]}>
          <Image
            src="/assets/shared/tablet/image-best-gear.jpg"
            width={689}
            height={300}
            alt="best gear image"
          />
        </div>
        <div className={styles["about-image-mobile"]}>
          <Image
            src="/assets/shared/mobile/image-best-gear.jpg"
            width={327}
            height={300}
            alt="best gear image"
          />
        </div>
      </div>
    </section>
  );
}

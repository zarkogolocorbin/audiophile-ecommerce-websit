import Image from "next/dist/client/image";
import styles from "../../styles/gallery.module.css";
export default function ProductGalleryComponent({ galleryImage }) {
  return (
    <section className={styles.gallery}>
      <div className={styles.first}>
        <Image
          height={280}
          width={445}
          src={`${galleryImage.firstLargeImage}`}
          alt=""
        />
        <Image
          height={280}
          width={445}
          src={`${galleryImage.secondLargeImage}`}
          alt=""
        />
      </div>
      <Image
        height={592}
        width={635}
        src={`${galleryImage.thirdLargeImage}`}
        alt=""
      />
    </section>
  );
}

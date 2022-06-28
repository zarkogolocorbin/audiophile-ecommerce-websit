import Image from "next/image";
import Link from "next/dist/client/link";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import styles from "../../styles/footer.module.css";
export default function FooterComponent() {
  return (
    <div className={styles["footer-center"]}>
      <div className={styles["footer-header"]}>
        <Image
          src="/assets/shared/logo.svg"
          width={145}
          height={25}
          alt="logo"
        />
        <div className={styles["footer-links"]}>
          <Link href="/">
            <a>HOME</a>
          </Link>
          <Link href="/category/headphones">
            <a>HEADPHONES</a>
          </Link>
          <Link href="/category/speakers">
            <a>SPEAKERS</a>
          </Link>
          <Link href="/category/earphones">
            <a>EARPHONES</a>
          </Link>
        </div>
      </div>
      <div className={styles["footer-content"]}>
        <p>
          Audiophile is an all in one stop to fulfill your audio needs. We’re a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <div className={styles["social-icons"]}>
          <Link href="/">
            <a>
              <BsFacebook />
            </a>
          </Link>
          <Link href="/">
            <a>
              <BsInstagram />
            </a>
          </Link>
          <Link href="/">
            <a>
              <BsTwitter />
            </a>
          </Link>
        </div>
      </div>
      <p>Copyright {new Date().getFullYear()}. All Rights Reserved</p>
    </div>
  );
}

import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Image from "next/image";
import Link from "next/link";
import CartComponent from "./Cart";
import SidebarComponent from "./Sidebar";
import styles from "../../styles/navbar.module.css";
import { useRouter } from "next/router";

export default function NavbarComponent() {
  const { showCart, setShowCart, cartItems, isSidebarOpen, setIsSidebarOpen } =
    useContext(CartContext);

  const router = useRouter();

  const handleClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles["navbar-center"]}>
        <div
          onClick={() => handleClick()}
          className={styles[`${isSidebarOpen ? "close-menu" : "open-menu"}`]}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>

        <Image
          src="/assets/shared/logo.svg"
          width={143}
          height={25}
          alt="logo image"
        />

        <div className={styles["navbar-links"]}>
          <Link href="/">
            <a className={styles[`${router.asPath === "/" ? "active" : ""}`]}>
              HOME
            </a>
          </Link>
          <Link href={"/category/headphones"}>
            <a
              className={
                styles[
                  `${router.asPath === "/category/headphones" ? "active" : ""}`
                ]
              }
            >
              HEADPHONES
            </a>
          </Link>
          <Link href={"/category/speakers"}>
            <a
              className={
                styles[
                  `${router.asPath === "/category/speakers" ? "active" : ""}`
                ]
              }
            >
              SPEAKERS
            </a>
          </Link>
          <Link href={"/category/earphones"}>
            <a
              className={
                styles[
                  `${router.asPath === "/category/earphones" ? "active" : ""}`
                ]
              }
            >
              EARPHONES
            </a>
          </Link>
        </div>
        <button
          datacount={cartItems.length}
          className={styles["navbar-cart"]}
          onClick={() => setShowCart(!showCart)}
        >
          <Image
            src="/assets/shared/icon-cart.svg"
            width={24}
            height={20}
            alt="add to cart"
          />
        </button>
      </div>
      {showCart && <CartComponent />}
      {isSidebarOpen && <SidebarComponent />}
    </nav>
  );
}

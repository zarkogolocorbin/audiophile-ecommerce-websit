import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import styles from "../../styles/conformation.module.css";
import OrderComponent from "../Checkuout/Order";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Confirmation() {
  const router = useRouter();
  const [showLess, setShowLess] = useState(true);
  const { removeAll } = useContext(CartContext);
  const handleClick = (e) => {
    router.push("/");
    removeAll();
  };
  return (
    <div className={styles.overlay}>
      <div className={styles.conformation}>
        <Image
          src={"/assets/checkout/icon-check.svg"}
          width={64}
          height={64}
          alt="confirm check image"
        />
        <h1>THANK YOU FOR YOUR ORDER</h1>
        <p>You will receive an email confirmation shortly.</p>
        <div className={styles["conformations-order"]}>
          <OrderComponent showLess={showLess} setShowLess={setShowLess} />
        </div>
        <button className="btn" onClick={() => handleClick()}>
          back to home
        </button>
      </div>
    </div>
  );
}

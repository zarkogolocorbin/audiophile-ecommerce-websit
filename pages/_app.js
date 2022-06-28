import "../styles/globals.css";
import "../styles/form.css";
import { StateContext } from "../context/CartContext";
import { motion } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Component {...pageProps} />
    </StateContext>
  );
}

export default MyApp;

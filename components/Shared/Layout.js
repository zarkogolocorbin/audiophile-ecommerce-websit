import Head from "next/head";
import NavbarComponent from "./Navbar";
import { useRouter } from "next/router";
import CategoriesCardsComponent from "./CategoriesCards";
import AboutSectionComponent from "./AboutSection";
import FooterComponent from "./Footer";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: -20 },
  enter: { opacity: 1, y: 0 },
  // exit: { opacity: 0, y: 20 },
};

export default function LayoutComponent({
  children,
  title,
  keywords,
  description,
  id,
}) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{`Audio Phile | ${title}`}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
      </Head>
      <NavbarComponent />
      <AnimatePresence exitBeforeEnter>
        <motion.main
          key={id}
          variants={variants}
          initial="hidden"
          animate="enter"
          // exit="exit"
          transition={{ type: "linear", duration: "0.8" }}
        >
          {children}
          {router.route !== "/" && <CategoriesCardsComponent />}
          <AboutSectionComponent />
        </motion.main>
      </AnimatePresence>
      <footer>
        <FooterComponent />
      </footer>
    </div>
  );
}

LayoutComponent.defaultProps = {
  title: "Home Page",
  keywords: "e-comer audio story, headphones, speakers, earphones",
  description:
    "The best audio equipment store where you can buy headphones, speakers, earphones",
};

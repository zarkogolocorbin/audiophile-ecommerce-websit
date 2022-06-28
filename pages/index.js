import FirstShowCase from "../components/Home/FirstShowCase";
import HeroComponent from "../components/Home/Hero";
import SecondShowCase from "../components/Home/SecondShowCase";
import ThirdShowCaseContent from "../components/Home/ThirdShowCase";
import CategoriesCardsComponent from "../components/Shared/CategoriesCards";
import LayoutComponent from "../components/Shared/Layout";

export default function Home() {
  return (
    <LayoutComponent>
      <HeroComponent />
      <CategoriesCardsComponent />
      <FirstShowCase />
      <SecondShowCase />
      <ThirdShowCaseContent />
    </LayoutComponent>
  );
}

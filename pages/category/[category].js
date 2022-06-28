import LayoutComponent from "../../components/Shared/Layout";
import ProductCardsComponent from "../../components/Category/ProductCards";
import JumbotronComponent from "../../components/Category/Jumbotron";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default function CategoryPage({ data }) {
  const objData = JSON.parse(data);
  return (
    <LayoutComponent title={objData.name} id={objData.name}>
      <JumbotronComponent name={objData.name} />
      <ProductCardsComponent data={objData} />
    </LayoutComponent>
  );
}

export async function getServerSideProps(context) {
  const currentCategory = context.query.category;

  const category = await prisma.category.findFirst({
    where: {
      name: currentCategory.toUpperCase(),
    },
    include: { products: true },
  });

  const currentsCategory = JSON.stringify(category);
  return {
    props: {
      data: currentsCategory,
    },
  };
}

import LayoutComponent from "../../components/Shared/Layout";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import ProductDetailsComponent from "../../components/Product/ProductDetails";
import ProductFeatureComponent from "../../components/Product/ProductFeature";
import ProductGalleryComponent from "../../components/Product/ProductGallery";
import LikeProductComponent from "../../components/Product/LikeProduct";

import Link from "next/link";

export default function ProductPage({ data, allProducts, prev }) {
  const objData = JSON.parse(data);
  const objAllProducts = JSON.parse(allProducts);
  const projectsLike = objAllProducts.filter(
    (item) => item.slug !== objData.slug
  );

  return (
    <LayoutComponent title={objData.slug} id={objData.slug}>
      <div className="prev-btn">
        <Link href={prev} passHref>
          <a>Go Back</a>
        </Link>
      </div>

      <ProductDetailsComponent data={objData} />
      <ProductFeatureComponent
        firstFeatureText={objData.firstFeatureText}
        secondFeatureText={objData.secondFeatureText}
        includes={objData.includes}
      />
      <ProductGalleryComponent galleryImage={objData.galeryImage[0]} />
      <LikeProductComponent projectsLike={projectsLike} />
    </LayoutComponent>
  );
}

export async function getServerSideProps(context) {
  const slug = context.query.slug;

  const products = await prisma.product.findMany();
  const product = await prisma.product.findFirst({
    where: {
      slug: slug,
    },
    include: {
      includes: true,
      galeryImage: true,
    },
  });
  const currentProduct = JSON.stringify(product);
  const allProducts = JSON.stringify(products);
  return {
    props: {
      data: currentProduct,
      allProducts,
      prev: context.req.headers.referer,
    },
  };
}

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "model" TEXT NOT NULL DEFAULT E'default value',
    "slug" TEXT NOT NULL,
    "new" BOOLEAN NOT NULL DEFAULT true,
    "price" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "firstFeatureText" TEXT NOT NULL,
    "secondFeatureText" TEXT NOT NULL,
    "smallMainImage" TEXT NOT NULL,
    "mediumMainImage" TEXT NOT NULL,
    "largeMainImage" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Include" (
    "id" SERIAL NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "item" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "Include_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Galery" (
    "id" SERIAL NOT NULL,
    "firstSmallImage" TEXT NOT NULL,
    "firstMediumImage" TEXT NOT NULL,
    "firstLargeImage" TEXT NOT NULL,
    "secondSmallImage" TEXT NOT NULL,
    "secondMediumImage" TEXT NOT NULL,
    "secondLargeImage" TEXT NOT NULL,
    "thirdSmallImage" TEXT NOT NULL,
    "thirdMediumImage" TEXT NOT NULL,
    "thirdLargeImage" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "Galery_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_name_key" ON "Product"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Product_slug_key" ON "Product"("slug");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Include" ADD CONSTRAINT "Include_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Galery" ADD CONSTRAINT "Galery_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

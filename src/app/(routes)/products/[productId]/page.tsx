import { Container } from "~/components/container";
import { ProductList } from "~/components/sections/product-list";
import { PRODUCTS } from "~/lib/constants";
import { Gallery } from "./_components/gallery";
import { ProductInfo } from "./_components/product-info";

export default async function ProductPage({
  params,
}: {
  params: { productId: string };
}) {
  const product = PRODUCTS.find(
    (product) => product.productId === params.productId,
  );

  if (!product) {
    return;
  }

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Gallery images={product.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0 flex items-start">
              <ProductInfo product={product} />
            </div>
          </div>
          <hr className="my-10" />
          <ProductList title="Related items" items={PRODUCTS} />
        </div>
      </Container>
    </div>
  );
}

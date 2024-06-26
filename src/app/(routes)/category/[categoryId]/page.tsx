import { Container } from "~/components/container";
import { Billboard } from "~/components/sections/billboard";
import { BILLBOARDS, SIZES, COLORS, PRODUCTS } from "~/lib/constants";
import { Filter } from "../_components/filter";
import { NoResults } from "~/components/no-results";
import { ProductCard } from "~/components/sections/product-card";
import { MobileFilter } from "../_components/mobile-filter";

export const revalidate = 0;

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}) {
  return (
    <div className="bg-white">
      <Container>
        <Billboard billboard={BILLBOARDS[0]} />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilter sizes={SIZES} colors={COLORS} />
            <div className="hidden lg:block">
              <Filter valueKey="sizeId" name="Sizes" data={SIZES} />
              <Filter valueKey="colorId" name="Colors" data={COLORS} />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {PRODUCTS.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {PRODUCTS.map((product) => (
                  <ProductCard key={product.productId} product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

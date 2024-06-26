import type { FC } from "react";
import { Product } from "~/lib/types";
import { ProductList } from "./product-list";

type Props = {
  products: Product[];
};

export const Products: FC<Props> = ({ products }) => {
  return (
    <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
      <ProductList title="Products" items={products} />
    </div>
  );
};

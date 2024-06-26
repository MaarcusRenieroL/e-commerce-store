"use client";

import { ShoppingCartIcon } from "lucide-react";
import { FC } from "react";
import { Button } from "~/components/ui/button";
import useCart from "~/hooks/use-cart";
import { Product } from "~/lib/types";

type Props = {
  product: Product;
};

export const ProductInfo: FC<Props> = ({ product }) => {
  const cart = useCart();
  const onAddToCart = () => {
    cart.addItem(product);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">
        {product.productName}
      </h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">{product.price}</p>
      </div>
      <hr className="my-4 " />
      <div className="space-y-5">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <div>{product.size.name}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div
            className="h-6 w-6 rounded-full border"
            style={{
              backgroundColor: product.color.value,
            }}
          />
        </div>
      </div>
      <div className="mt-10 gap-x-3">
        <Button
          className="flex items-center gap-x-2 rounded-full px-4 py-2"
          onClick={() => onAddToCart}
        >
          <p>Add to Cart</p>
          <ShoppingCartIcon />
        </Button>
      </div>
    </div>
  );
};

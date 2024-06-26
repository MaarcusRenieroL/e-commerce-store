import { FC } from "react";
import { Product } from "~/lib/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { ShoppingCartIcon } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

type Props = {
  product: Product;
};

export const ProductCard: FC<Props> = ({ product }) => {
  return (
    <Link href={`/products/${product.productId}`}>
      <Card className="p-0">
        <CardHeader className="p-0">
          <Image
            src="https://utfs.io/f/bda6cc49-e3a7-4496-b34a-917a02c83aa9-mi9bnt.png"
            alt="product-image"
            className="w-full h-full rounded"
            width={100}
            height={100}
          />
        </CardHeader>
        <CardContent className="p-4">
          <div className="space-y-2">
            <CardTitle>{product.productName}</CardTitle>
            <CardDescription>{product.price}</CardDescription>
          </div>
        </CardContent>
        <CardFooter className="justify-end w-full">
          <Button size="icon" variant="outline">
            <ShoppingCartIcon className="h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

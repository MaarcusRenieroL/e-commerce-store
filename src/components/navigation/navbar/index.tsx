import Link from "next/link";
import { FC } from "react";
import { Container } from "~/components/container";
import { MainNav } from "./main-nav";
import { Category } from "~/lib/types";

export const Navbar: FC = () => {
  const categories: Category[] = [
    {
      categoryId: "1",
      categoryLabel: "Shoes",
      billboard: {
        billboardId: "1",
        billboardLabel: "Shoes",
        imageUrl: "abcd",
      },
    },
  ];

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg-px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="text-xl font-bold">STORE</p>
          </Link>
          <MainNav data={categories} />
        </div>
      </Container>
    </div>
  );
};

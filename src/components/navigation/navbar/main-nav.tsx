"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { cn } from "~/lib/utils";
import { Category } from "~/lib/types";
import { CATEGORIES } from "~/lib/constants";

type Props = {
  data: Category[];
};

export const MainNav: FC<Props> = ({ data }) => {
  const pathname = usePathname();

  const routes = CATEGORIES.map((route) => ({
    href: `/category/${route.categoryId}`,
    title: route.categoryLabel,
    active: pathname === `/category/${route.categoryId}`,
  }));

  return (
    <div className="mx-6 flex items-center space-x-4 lg:space-x-6">
      {routes.map((route) => (
        <Link
          href={route.href}
          key={route.title}
          className={cn(
            "text-sm font-medium transition-colors hover:underline hover:underline-offset-4",
            route.active ? "underline underline-offset-4" : "text-black",
          )}
        >
          {route.title}
        </Link>
      ))}
    </div>
  );
};

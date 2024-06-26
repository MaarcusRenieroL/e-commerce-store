"use client";

import { FC, useEffect, useState } from "react";
import { Button } from "~/components/ui/button";
import { ShoppingBag } from "lucide-react";
import useCart from "~/hooks/use-cart";

export const NavbarActions: FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  const cart = useCart();

  useEffect(() => {
    setIsMounted(false);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Button size="icon" variant="outline">
      <ShoppingBag className="h-4 w-4" color="black" />
      <p className="ml-2 text-sm font-medium">{cart.items.length}</p>
    </Button>
  );
};

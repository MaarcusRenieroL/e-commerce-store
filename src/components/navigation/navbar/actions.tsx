"use client";

import { FC, useEffect, useState } from "react";
import { Button } from "~/components/ui/button";
import { ShoppingBag } from "lucide-react";

export const NavbarActions: FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(false);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        size="icon"
        variant="outline"
        className="flex items-center rounded-full space-x-3 px-4 py-2 w-auto disabled:cursor-not-allowed disabled:opacity-50 font-semibold hover:opacity-75 transition"
      >
        <ShoppingBag className="h-4 w-4" color="black" />
        <p className="ml-2 text-sm font-medium">0</p>
      </Button>
    </div>
  );
};

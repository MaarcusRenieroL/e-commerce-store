import { FC, ReactNode } from "react";
import { Toaster } from "../ui/sonner";

type Props = {
  children: ReactNode;
};

export const Providers: FC<Props> = ({ children }) => {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
};

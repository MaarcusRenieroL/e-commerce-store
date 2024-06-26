import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Container: FC<Props> = ({ children }) => {
  return <div className="mx-auto max-2-7xl">{children}</div>;
};

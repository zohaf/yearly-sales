import type { FC } from "react";
import { ReactNode } from "react";
import styles from "./Container.module.scss";

type ContainerPropps = {
  children: ReactNode;
};

export const Container: FC<ContainerPropps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center md:py-48 md:px-96 py-4 px-4 ">
      <div className="min-w-full">{children}</div>
    </div>
  );
};

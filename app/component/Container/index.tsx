import type { FC } from "react";
import { ReactNode } from "react";
import styles from "./Container.module.scss";

type ContainerPropps = {
  children: ReactNode;
};

export const Container: FC<ContainerPropps> = ({ children }) => {
  return (
    <div className="flex justify-center">
      <div className='max-w-xl py-48 sm:py-4 sm:px-4'>{children}</div>
    </div>
  );
};

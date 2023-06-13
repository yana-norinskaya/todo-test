import { FC, ReactNode } from "react";
import styles from "./style.module.scss";

interface IWrapper {
  children: ReactNode;
}

export const Wrapper: FC<IWrapper> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

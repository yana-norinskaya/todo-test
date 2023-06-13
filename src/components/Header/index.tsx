import { FC } from "react";
import styles from "./style.module.scss";

export const Header: FC = () => {
  return (
    <header>
      <h1 className={styles.title}>Todo</h1>
    </header>
  );
};

import { FC, useContext, useState } from "react";
import styles from "./style.module.scss";
import { TasksContext } from "../../context/TasksContext";

export const Input: FC = () => {
  const { handleSubmit } = useContext(TasksContext);
  const [value, setValue] = useState("");

  const keydown = (e: any) => {
    if (e.keyCode === 13) {
      handleSubmit(value);
      setValue("");
    }
  };
  return (
    <input
      onKeyDown={(e) => keydown(e)}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className={styles.input}
      placeholder="What needs to be done?"
    />
  );
};

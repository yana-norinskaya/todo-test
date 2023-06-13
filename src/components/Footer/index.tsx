import { FC, useCallback, useContext } from "react";
import styles from "./style.module.scss";
import { TasksContext } from "../../context/TasksContext";
import { TypeFilter } from "../../types/tasks.type";

export const Footer: FC = () => {
  const { typeFilter, setTypeFilter, tasks, deleteCompletedTasks } =
    useContext(TasksContext);

  const styleActiveBtn = useCallback(
    (typeBtn: TypeFilter) => {
      if (typeFilter === typeBtn) {
        return `${styles.btn} ${styles.btn_active}`;
      } else {
        return styles.btn;
      }
    },
    [typeFilter]
  );
  const renderCountTasks = useCallback(() => {
    return tasks.length;
  }, [tasks]);
  return (
    <div className={styles.footer}>
      <p className={styles.text}>{renderCountTasks()} tasks</p>
      <div>
        <button
          onClick={() => setTypeFilter("all")}
          className={styleActiveBtn("all")}
        >
          All
        </button>
        <button
          onClick={() => setTypeFilter("active")}
          className={styleActiveBtn("active")}
        >
          Active
        </button>
        <button
          onClick={() => setTypeFilter("completed")}
          className={styleActiveBtn("completed")}
        >
          Completed
        </button>
      </div>
      <div>
        <button onClick={() => deleteCompletedTasks()} className={styles.btn}>
          Clear completed
        </button>
      </div>
    </div>
  );
};

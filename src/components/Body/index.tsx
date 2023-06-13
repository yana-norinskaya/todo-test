import { FC, useCallback, useContext } from "react";
import styles from "./style.module.scss";
import done from "../../assets/done.svg";
import { TasksContext } from "../../context/TasksContext";
import deleteImg from "../../assets/delete.svg";

export const Body: FC = () => {
  const { tasks, toggleCompleted, typeFilter, deleteTask } =
    useContext(TasksContext);

  const renderFilterTasks = useCallback(() => {
    if (typeFilter === "active") {
      return tasks.filter((el) => el.isCompleted === false);
    } else if (typeFilter === "completed") {
      return tasks.filter((el) => el.isCompleted);
    } else {
      return tasks;
    }
  }, [tasks, typeFilter]);

  return (
    <ul className={styles.content}>
      {renderFilterTasks().map((task) => (
        <li
          key={task.id}
          className={`${styles.task} ${
            task.isCompleted ? styles.task_completed : ""
          } `}
        >
          <div
            onClick={() => toggleCompleted(task.id)}
            className={styles.checkbox}
          >
            {task.isCompleted && (
              <img data-testid="done" src={done} alt="done" />
            )}
          </div>
          <p
            className={
              task.isCompleted ? styles.task_completed : styles.task_value
            }
          >
            {" "}
            {task.value}
          </p>

          <img
            onClick={() => deleteTask(task.id)}
            className={styles.delete}
            src={deleteImg}
            alt="delete"
          />
        </li>
      ))}
    </ul>
  );
};

import { FC, ReactNode, createContext, useState } from "react";
import { useGetTask } from "../hooks/useGetTask";
import { ITasks, TypeFilter } from "../types/tasks.type";

export interface GlobalContent {
  tasks: ITasks[];
  typeFilter: TypeFilter;
  handleSubmit: (name: string) => void;
  toggleCompleted: (taskId: number) => void;
  setTypeFilter: (type: TypeFilter) => void;
  deleteCompletedTasks: () => void;
  deleteTask: (id: number) => void;
}
export const TasksContext = createContext<GlobalContent>({
  tasks: [],
  typeFilter: "all",
  handleSubmit: () => {},
  toggleCompleted: () => {},
  setTypeFilter: () => {},
  deleteCompletedTasks: () => {},
  deleteTask: () => {},
});

interface ITaskDataProvider {
  children: ReactNode;
}

export const TaskDataProvider: FC<ITaskDataProvider> = ({ children }) => {
  const {
    tasks,
    handleSubmit,
    toggleCompleted,
    deleteCompletedTasks,
    deleteTask,
  } = useGetTask();
  const [typeFilter, setTypeFilter] = useState<"all" | "active" | "completed">(
    "all"
  );

  return (
    <TasksContext.Provider
      value={{
        tasks,
        handleSubmit,
        toggleCompleted,
        typeFilter,
        setTypeFilter,
        deleteCompletedTasks,
        deleteTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

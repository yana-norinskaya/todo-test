import { useState } from "react";
import { ITasks } from "../types/tasks.type";

export const useGetTask = () => {
  const [tasks, setTasks] = useState<ITasks[]>([]);

  const handleSubmit = (value: string) => {
    const newData = {
      id: Math.random(),
      value,
      isCompleted: false,
    };
    setTasks((prevData) => [...prevData, newData]);
  };

  const toggleCompleted = (taskId: number) => {
    const newArr = tasks.map((task) =>
      task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(newArr);
  };

  const deleteCompletedTasks = () => {
    setTasks((prev) => prev.filter((el) => !el.isCompleted));
  };

  const deleteTask = (taskId: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return {
    handleSubmit,
    tasks,
    toggleCompleted,
    deleteCompletedTasks,
    deleteTask,
  };
};

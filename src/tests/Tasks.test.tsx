import { ReactNode } from "react";
import { TasksContext } from "../context/TasksContext";
import { ITasks, TypeFilter } from "../types/tasks.type";
import { Body } from "../components/Body";
import { render, screen } from "@testing-library/react";

const tasks: ITasks[] = [
  { id: 1, value: "Помыть посуду", isCompleted: true },
  { id: 2, value: "Сходить в магазин", isCompleted: false },
  { id: 3, value: "Погулять", isCompleted: false },
];

const customRender = (children: ReactNode, typeFilter: TypeFilter = "all") => {
  return render(
    <TasksContext.Provider
      value={{
        tasks,
        typeFilter: typeFilter,
        handleSubmit: () => {},
        toggleCompleted: () => {},
        setTypeFilter: () => {},
        deleteCompletedTasks: () => {},
        deleteTask: () => {},
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

describe("TEST APP", () => {
  test("Shows all tasks from provider", () => {
    customRender(<Body />, "all");

    expect(screen.getByText(/помыть посуду/i)).toBeDefined();
    expect(screen.getByText(/сходить в магазин/i)).toBeDefined();
    screen.debug();
  });
  test("Shows completed tasks from provider", () => {
    customRender(<Body />, "completed");
    expect(screen.getAllByAltText("done")).toBeDefined();
    expect(screen.getByText(/помыть посуду/i)).toBeDefined();
    expect(screen.queryByText(/сходить в магазин/i)).toBeNull();
    screen.debug();
  });
  test("Shows active tasks from provider", () => {
    customRender(<Body />, "active");
    expect(screen.queryByAltText("done")).not.toBeInTheDocument();
    expect(screen.queryByText(/помыть посуду/i)).toBeNull();
    expect(screen.getByText(/сходить в магазин/i)).toBeDefined();
    screen.debug();
  });
});

import { useState } from "react";

export function useManageTasks() {
  const [taskList, onChangeTaskList] = useState<Array<string>>([]);
  const [newTask, onTaskChange] = useState<string>("");

  return {
    taskList,
    newTask,
    onTaskChange,
    onAddTask: () => {
      onChangeTaskList((prev) => prev.concat(newTask));
      onTaskChange("");
    },
  };
}

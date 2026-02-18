export const filterTasks = (tasks, status, priority) => {
    return tasks.filter(task =>
      (status === "All" || task.status === status) &&
      (priority === "All" || task.priority === priority)
    );
  };
  
  export const sortTasks = (tasks, order) => {
    return [...tasks].sort((a, b) =>
      order === "asc"
        ? new Date(a.dueDate) - new Date(b.dueDate)
        : new Date(b.dueDate) - new Date(a.dueDate)
    );
  };
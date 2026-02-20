import { useState, useEffect } from "react";

function TaskForm({ onSubmit, editTask }) {
  const [task, setTask] = useState({
    title: "",
    description: "",
    priority: "Low",
    dueDate: "",
    status: "To Do"
  });

  useEffect(() => {
    if (editTask) setTask(editTask);
  }, [editTask]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.title || !task.dueDate) return;
    onSubmit(task);
    setTask({
      title: "",
      description: "",
      priority: "Low",
      dueDate: "",
      status: "To Do"
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input name="title" placeholder="Title" value={task.title} onChange={handleChange} required />
      <textarea name="description" placeholder="Description" value={task.description} onChange={handleChange} />
      <select name="priority" value={task.priority} onChange={handleChange}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <input type="date" name="dueDate" value={task.dueDate} onChange={handleChange} required />
      <button type="submit">{editTask ? "Update Task" : "Add Task"}</button>
    </form>
  );
}

export default TaskForm;// Added task input form logic
// Added task input form logic
// Added task input form logic

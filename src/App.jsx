import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";
import DashboardSummary from "./components/DashboardSummary";
import useLocalStorage from "./hooks/useLocalStorage";
import { filterTasks, sortTasks } from "./utils/helpers";
import "./App.css";

function App() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [editTask, setEditTask] = useState(null);
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterPriority, setFilterPriority] = useState("All");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSubmit = (task) => {
    if (editTask) {
      setTasks(tasks.map(t => t.id === editTask.id ? task : t));
      setEditTask(null);
    } else {
      setTasks([...tasks, { ...task, id: Date.now() }]);
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const updateStatus = (id, status) => {
    setTasks(tasks.map(t =>
      t.id === id ? { ...t, status } : t
    ));
  };

  const filtered = filterTasks(tasks, filterStatus, filterPriority);
  const sorted = sortTasks(filtered, sortOrder);

  return (
    <div className="app">
      <h1>Srishti's Smart Task Management Dashboard</h1>

      <DashboardSummary tasks={tasks} />

      <TaskForm onSubmit={handleSubmit} editTask={editTask} />

      <FilterBar
        setFilterStatus={setFilterStatus}
        setFilterPriority={setFilterPriority}
        setSortOrder={setSortOrder}
      />

      <TaskList
        tasks={sorted}
        deleteTask={deleteTask}
        updateStatus={updateStatus}
        setEditTask={setEditTask}
      />
    </div>
  );
}

export default App;// Task status logic added
// Filtering, sorting and localStorage integrated
// Task status logic added
// Filtering, sorting and localStorage integrated
// Task status logic added
// Filtering, sorting and localStorage integrated

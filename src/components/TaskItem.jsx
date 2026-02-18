function TaskItem({ task, deleteTask, updateStatus, setEditTask }) {
    return (
      <div className={`task-card ${task.status.replace(" ", "-")}`}>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <p><strong>Priority:</strong> {task.priority}</p>
        <p><strong>Due:</strong> {task.dueDate}</p>
  
        <select
          value={task.status}
          onChange={(e) => updateStatus(task.id, e.target.value)}
        >
          <option>To Do</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>
  
        <div className="buttons">
          <button onClick={() => setEditTask(task)}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      </div>
    );
  }
  
  export default TaskItem;
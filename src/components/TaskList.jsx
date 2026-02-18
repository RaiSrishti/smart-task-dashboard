import TaskItem from "./TaskItem";

function TaskList({ tasks, deleteTask, updateStatus, setEditTask }) {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            updateStatus={updateStatus}
            setEditTask={setEditTask}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;// Added dynamic task rendering
// Added dynamic task rendering

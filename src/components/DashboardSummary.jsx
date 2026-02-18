function DashboardSummary({ tasks }) {
    const total = tasks.length;
    const completed = tasks.filter(t => t.status === "Completed").length;
    const pending = total - completed;
  
    return (
      <div className="dashboard">
        <div>Total Tasks: {total}</div>
        <div>Completed: {completed}</div>
        <div>Pending: {pending}</div>
      </div>
    );
  }
  
  export default DashboardSummary;// Dashboard summary component created
// Dashboard summary component created

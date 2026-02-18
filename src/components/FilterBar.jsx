function FilterBar({ setFilterStatus, setFilterPriority, setSortOrder }) {
    return (
      <div className="filter-bar">
        <select onChange={(e) => setFilterStatus(e.target.value)}>
          <option value="All">All Status</option>
          <option>To Do</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>
  
        <select onChange={(e) => setFilterPriority(e.target.value)}>
          <option value="All">All Priority</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
  
        <select onChange={(e) => setSortOrder(e.target.value)}>
          <option value="asc">Sort by Due Date (Asc)</option>
          <option value="desc">Sort by Due Date (Desc)</option>
        </select>
      </div>
    );
  }
  
  export default FilterBar;
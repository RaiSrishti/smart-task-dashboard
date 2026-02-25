# Srishti's Smart Task Management Dashboard

A modern frontend-only task management application built using React.js.  
This project was developed as part of my React Internship assignment to demonstrate practical understanding of component-based architecture, state management, and real-world UI development.

---

## Project Objective

The goal of this project is to build a clean and interactive task management dashboard that allows users to:

- Create and manage daily tasks
- Track task progress
- Organize tasks based on priority and due date
- Persist data using browser localStorage
- View task statistics through a dashboard summary

This project focuses entirely on frontend development without backend integration.

---

## Features Implemented

- Add new tasks (Title, Description, Priority, Due Date)
- Edit and delete existing tasks
- Update task status (To Do, In Progress, Completed)
- Filter tasks by status and priority
- Sort tasks by due date
- Dashboard summary (Total, Completed, Pending tasks)
- Persistent data storage using localStorage
- Clean and responsive UI design

---

## Tech Stack

- React.js (Functional Components)
- JavaScript (ES6+)
- CSS (Modern UI Styling)
- Browser localStorage API
- Vite (Development Environment)

---

## Technical Highlights

- Component-based architecture for modularity and scalability
- Custom Hook (`useLocalStorage`) for reusable persistent state logic
- Utility functions for filtering and sorting logic separation
- Proper state management using React Hooks (`useState`, `useEffect`)
- Clean folder structure following industry best practices
- Responsive and user-friendly interface design

---

## Project Structure
```
smart-task-dashboard/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── TaskForm.jsx
│   │   ├── TaskList.jsx
│   │   ├── TaskItem.jsx
│   │   ├── FilterBar.jsx
│   │   └── DashboardSummary.jsx
│   │
│   ├── hooks/
│   │   └── useLocalStorage.js
│   │
│   ├── utils/
│   │   └── helpers.js
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── README.md
├── package.json
└── vite.config.js
```

## Author
Srishti Rai M
Final Year – Computer Science and Engineering
React Internship Project

import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState(() => {
    // Load saved tasks from localStorage
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState("");

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, { text: input, completed: false }]);
    setInput("");
  };

  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="app">
      <header className="header">
        <h1>My Tasks</h1>
        <p>Organize your day efficiently ✨</p>
      </header>

      <div className="task-input">
        <input
          type="text"
          placeholder="Enter a new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <ul className="task-list">
        {tasks.length === 0 && <p className="empty">No tasks yet — add one!</p>}
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? "completed" : ""}>
            <span onClick={() => toggleComplete(index)}>{task.text}</span>
            <button className="delete" onClick={() => deleteTask(index)}>
              ✖
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

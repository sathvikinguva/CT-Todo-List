import React, { useState } from 'react';
import './TodoApp.css';

function TodoApp() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleAddTask = () => {
    if (task.trim() === '') return;
    const updatedTodos = [...todos];
    if (editIndex !== null) {
      updatedTodos[editIndex] = task;
      setEditIndex(null);
    } else {
      updatedTodos.push(task);
    }
    setTodos(updatedTodos);
    setTask('');
  };

  const handleEdit = (index) => {
    setTask(todos[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-container">
      <h1>Get Things Done!</h1>
      <div className="input-section">
        <input
          type="text"
          placeholder="What is the task today?"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleAddTask}>
          {editIndex !== null ? 'Update' : 'Add Task'}
        </button>
      </div>
      <div className="task-list">
        {todos.map((todo, index) => (
          <div className="task-item" key={index}>
            <span>{todo}</span>
            <div className="icons">
              <button onClick={() => handleEdit(index)}>🖉</button>
              <button onClick={() => handleDelete(index)}>🗑️</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoApp;

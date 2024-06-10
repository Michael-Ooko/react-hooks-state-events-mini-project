import React from "react";

function Task({ task, onDelete }) {
  return (
    <div className="task">
      <div className="task-text">{task.text}</div>
      <div className="task-category">{task.category}</div>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
}

export default Task;

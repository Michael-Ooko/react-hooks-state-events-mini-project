import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[1]); // Default to the first category (excluding "All")

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      text,
      category
    };
    onTaskFormSubmit(newTask);
    setText(""); // Clear the text input after submission
    setCategory(categories[1]); // Reset the category to the first one (excluding "All")
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New task details"
        value={text}
        onChange={handleTextChange}
      />
      <select value={category} onChange={handleCategoryChange}>
        {categories
          .filter((category) => category !== "All")
          .map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
      </select>
      <button type="submit">Add task</button>
    </form>
  );
}

export default NewTaskForm;

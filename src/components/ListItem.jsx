import React from "react";
import { useState } from "react";

function ListItem({
  todo,
  onRemoveTodo,
  onToggleDone,
  onToggleEdit,
  onUpdateTodoName,
}) {
  const [todoName, setTodoName] = useState(todo.todoName);

  const todoNameStyle = {
    textDecoration: todo.done ? "line-through" : "none",
    display: todo.editing ? "none" : "inline",
  };

  function handleToggleTodo() {
    onToggleDone(todo.id);
  }

  function handleDeleteTodo() {
    onRemoveTodo(todo.id);
  }
  function handleToggleEdit() {
    if (todo.editing) {
      onUpdateTodoName(todo.id, todoName);
    }
    onToggleEdit(todo.id);
  }
  function handleChange(e) {
    setTodoName(e.target.value);
  }

  return (
    <div>
      <input type="checkbox" checked={todo.done} onChange={handleToggleTodo} />
      <span style={todoNameStyle}>{todo.todoName}</span>
      <input
        value={todoName}
        type="text-input"
        onChange={handleChange}
        style={todo.editing ? {} : { display: "none" }}
      />
      <button onClick={handleToggleEdit}>
        {todo.editing ? "save" : "edit"}
      </button>
      <button
        disabled={!todo.done}
        onClick={handleDeleteTodo}
        style={todo.done ? {} : { opacity: "60%" }}
      >
        delete
      </button>
    </div>
  );
}

export default ListItem;

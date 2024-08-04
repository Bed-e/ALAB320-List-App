import React from "react";

function ListItem({ todo, onRemoveTodo, onToggleDone }) {
  function handleToggleTodo() {
    onToggleDone(todo.id);
  }

  function handleDeleteTodo() {
    onRemoveTodo(todo.id);
  }
  return (
    <div>
      <span style={todo.done ? { textDecoration: "line-through" } : {}}>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={handleToggleTodo}
        />
        {todo.todoName}
      </span>
      <button>edit</button>
      <button
        disabled={!todo.done}
        onClick={handleDeleteTodo}
        style={!todo.done ? { opacity: "60%" } : {}}
      >
        delete
      </button>
    </div>
  );
}

export default ListItem;

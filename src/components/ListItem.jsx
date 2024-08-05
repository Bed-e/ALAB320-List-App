import React from "react";
import { useReducer } from "react";

function todoNameReducer(state, action) {
  switch (action.type) {
    case "SET_TODO_NAME":
      return action.payload;
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

function ListItem({
  todo,
  onRemoveTodo,
  onToggleDone,
  onToggleEdit,
  onUpdateTodoName,
}) {
  const [todoName, dispatch] = useReducer(todoNameReducer, todo.todoName);

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
    dispatch({ type: "SET_TODO_NAME", payload: e.target.value });
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

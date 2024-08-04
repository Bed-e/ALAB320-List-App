import React from "react";
import ListItem from "./ListItem";

function ToDoList({ todos, onRemoveTodo, onToggleDone }) {
  return (
    <div className="list">
      <ul>
        {console.log([...todos])}
        {todos.map((todo) => (
          <ListItem
            todo={todo}
            key={todo.id}
            id={todo.id}
            onRemoveTodo={onRemoveTodo}
            onToggleDone={onToggleDone}
          />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;

import React from "react";
import ListItem from "./ListItem";

function ToDoList({
  todos,
  onRemoveTodo,
  onToggleDone,
  onToggleEdit,
  onUpdateTodoName,
}) {
  // Sort todos in order of id from greatest to least
  const sortedTodos = [...todos].sort((a, b) => b.id - a.id);

  return (
    <div className="list">
      <ul>
        {/*console.log([...todos])*/}
        {sortedTodos.map((todo) => (
          <ListItem
            todo={todo}
            key={todo.id}
            id={todo.id}
            onRemoveTodo={onRemoveTodo}
            onToggleDone={onToggleDone}
            onToggleEdit={onToggleEdit}
            onUpdateTodoName={onUpdateTodoName}
          />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;

import React from "react";
import { useState } from "react";

function ItemAdder({ onAddTodo }) {
  //state variables
  const [todoName, setTodoName] = useState("");

  function handleChange(e) {
    setTodoName(e.target.value);
  }

  function handleAddItem(e) {
    e.preventDefault(); //unsure if this does anything in this case
    if (!todoName) return; //do nothing on addding item if name is empty
    const newTodo = {
      todoName,
      done: false,
      id: Date.now(),
      key: Date.now(),
      editing: false,
    };
    //console.log(newTodo);
    e.name = "";
    setTodoName("");
    onAddTodo(newTodo);
  }
  return (
    <div>
      <input
        value={todoName}
        type="text-input"
        onChange={handleChange}
        name=""
        placeholder="add a new list item?"
      ></input>
      <button onClick={handleAddItem}>Add</button>
    </div>
  );
}

export default ItemAdder;

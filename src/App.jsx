import Header from "./components/Header";
import ItemAdder from "./components/ItemAdder";
import ToDoList from "./components/ToDoList";
import { useState } from "react";

const defaultTodos = [
  { todoName: "ricky", done: false, id: 1, key: 1 },
  { todoName: "sticky", done: true, id: 2, key: 2 },
];

function App() {
  const [todos, setTodos] = useState(defaultTodos);

  function handleAddTodo(todo) {
    setTodos([...todos, todo]);
    //console.log([...todos, todo]);
  }

  function handleDeleteTodo(ID) {
    setTodos((todos) => todos.filter((todo) => todo.id !== ID));
  }

  function handleToggleDone(id) {
    console.log(id);
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              done: !todo.done,
            }
          : todo
      )
    );
  }

  return (
    <div>
      <Header />
      <ItemAdder onAddTodo={handleAddTodo} />
      <ToDoList
        todos={todos}
        onRemoveTodo={handleDeleteTodo}
        onToggleDone={handleToggleDone}
      />
    </div>
  );
}

export default App;

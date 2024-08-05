import Header from "./components/Header";
import ItemAdder from "./components/ItemAdder";
import ToDoList from "./components/ToDoList";
import { useState } from "react";

const defaultTodos = [
  { todoName: "Complete my ALab", done: true, id: 1, key: 1, editing: false },
  { todoName: "complete my SBA", done: false, id: 2, key: 2, editing: false },
  { todoName: "be amazing", done: false, id: 3, key: 3, editing: false },
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

  function handleToggleEdit(id) {
    console.log(`edit toggled for todo with id: ${id}`);
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              editing: !todo.editing,
            }
          : todo
      )
    );
  }
  function handleUpdateTodoName(id, newName) {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              todoName: newName,
            }
          : todo
      )
    );
  }

  function handleToggleDone(id) {
    //console.log(id);
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
        onToggleEdit={handleToggleEdit}
        onUpdateTodoName={handleUpdateTodoName}
      />
    </div>
  );
}

export default App;

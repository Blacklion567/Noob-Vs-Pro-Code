import { useState } from "react";
import AdvanceTodo from "./AdvanceTodo";

function AdvanceTodos() {
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState();

  function handleToggleComplete(todoId) {
    setTodos(currTodos => {
      return currTodos.map(todo => {
        if (todo.id === todoId) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    });
  }

  function handleSelect(todoId) {
    setSelectedTodo(todos.find(todo => todo.id === todoId));
  }

  return (
    <>
      {todos.map(todo => (
        <AdvanceTodo
          key={todo.id}
          todo={todo}
          handleToggleComplete={handleToggleComplete}
          handleSelect={handleSelect}
        />
      ))}
      <h3>Selected AdvanceTodo</h3>
      {selectedTodo && (
        <AdvanceTodo
          todo={selectedTodo}
          handleSelect={handleSelect}
          handleToggleComplete={handleToggleComplete}
        />
      )}
    </>
  );
}

export default AdvanceTodos;

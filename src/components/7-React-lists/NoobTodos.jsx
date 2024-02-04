import { useState } from "react";
import NoobTodo from "./NoobTodo";

function NoobTodos() {
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState();

  function handleToggleComplete(todoId) {
    setTodos(currTodos => {
      const todo = currTodos.find(todo => todo.id === todoId);
      todo.complete = !todo.complete;
      return currTodos;
    });
  }

  function handleSelect(todoId) {
    setSelectedTodo(todos.find(todo => todo.id === todoId));
  }

  return (
    <>
      {todos.map(todo => (
        <>
          <NoobTodo todo={todo}
            handleToggleComplete={handleToggleComplete}
            handleSelect={handleSelect} />
        </>
      ))}
      <h3>Selected NoobTodo</h3>
      {selectedTodo && (
        <NoobTodo
          todo={selectedTodo}
          handleSelect={handleSelect}
          handleToggleComplete={handleToggleComplete}
        />
      )}
    </>
  );
}


export default NoobTodos;

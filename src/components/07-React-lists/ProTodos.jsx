import { useState } from "react";
import PropTypes from "prop-types";
import ProTodo from "./ProTodo";

function ProTodos({ initialTodos }) {
  const [todos, setTodos] = useState(initialTodos);
  const [selectedTodoId, setSelectedTodoId] = useState();
  const selectedTodo = todos.find(todo => todo.id === selectedTodoId);

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

  return (
    <>
      {todos.map(todo => (
        <ProTodo
          key={todo.id}
          todo={todo}
          handleToggleComplete={handleToggleComplete}
          handleSelect={setSelectedTodoId}
        />
      ))}
      <h3>Selected ProTodo</h3>
      {selectedTodo && (
        <ProTodo
          todo={selectedTodo}
          handleSelect={setSelectedTodoId}
          handleToggleComplete={handleToggleComplete}
        />
      )}
    </>
  );
}

ProTodos.propTypes = {
  initialTodos: PropTypes.array
};

export default ProTodos;

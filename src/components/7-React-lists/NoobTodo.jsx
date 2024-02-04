import { shape, string, bool, func, number } from 'prop-types';

function NoobTodo({ todo, handleToggleComplete, handleSelect }) {
  function toggleComplete() {
    handleToggleComplete(todo.id);
  }

  function onSelect() {
    handleSelect(todo.id);
  }

  return (
    <>
      <input type="checkbox"
        checked={todo.completed}
        onChange={toggleComplete}
      />
      {todo.id}
      <button onClick={onSelect}>Select</button>
    </>
  );
}
NoobTodo.propTypes = {
  handleToggleComplete: func,
  handleSelect: func,
  todo: shape({
    id: number,
    name: string,
    complete: bool
  })
};

export default NoobTodo;

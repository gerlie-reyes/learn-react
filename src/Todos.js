import TodoContext from "./TodoContext";
import { useContext } from "react";

const Todos = () => {
  const { todos, addTodo } = useContext(TodoContext);

  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};

export default Todos;
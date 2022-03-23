import React, { useState, useCallback } from "react";
import Todos from "./Todos";

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };


  /* Without useCallback, even if we use memo on Todos component, it still re-renders. 
  This is because of something called "referential equality".
  Every time a component re-renders, its functions get recreated. 
  Because of this, the addTodo function has actually changed. */
  // const addTodo = () => {
  //   setTodos((prevTodos) => [...prevTodos, "New Todo"]);
  // };

  // Change it to use useCallback hook
  const addTodo = useCallback(() => {
    setTodos((prevTodos) => [...prevTodos, "New Todo"]);
  }, [todos]);

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}

export default App;

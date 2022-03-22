import { createContext, useState } from "react";

const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    setTodos(prevTodos => [...prevTodos, "New todo"])
  };

  return (<TodoContext.Provider value={{ todos, addTodo }} >
    {children}
  </TodoContext.Provider>)
}

export default TodoContext;
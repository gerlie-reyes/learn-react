import React from "react";
import Todos from "./Todos";
import { TodoProvider } from "./TodoContext";

const App = () => {
  return (
    <TodoProvider>
      <Todos />
    </TodoProvider>
  );
}

export default App;

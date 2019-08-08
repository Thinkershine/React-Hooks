import React from "react";
import ClickCounter from "./../src/clickCounter";
import CounterWithReducer from "./../src/reducerClickCounter";
import ToDoApp from "../src/todoApp";

const App = () => {
  return (
    <div>
      <h1>Hello to Hooks with React!</h1>
      <ClickCounter />
      <CounterWithReducer />
      <ToDoApp />
    </div>
  );
};

export default App;

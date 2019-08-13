import React from "react";
import ClickCounter from "./../src/clickCounter";
import CounterWithReducer from "./../src/reducerClickCounter";
import ToDoApp from "../src/todoApp";
import HackerNews from "../src/hackerNews";

const App = () => {
  return (
    <div>
      <h1>Hello to Hooks with React!</h1>
      <ClickCounter />
      <CounterWithReducer />
      <ToDoApp />
      <HackerNews />
    </div>
  );
};

export default App;

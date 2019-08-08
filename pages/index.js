import React from "react";
import ClickCounter from "./../src/clickCounter";
import CounterWithReducer from "./../src/reducerClickCounter";

const App = () => {
  return (
    <div>
      <h1>Hello to Hooks with React!</h1>
      <ClickCounter />
      <CounterWithReducer />
    </div>
  );
};

export default App;

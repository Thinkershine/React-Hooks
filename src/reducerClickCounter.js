import React, { useReducer } from "react";

const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return {
        ...state,
        count: state.count + 1,
        totalCount: state.totalCount + 1
      };
    case "DECREASE":
      return {
        ...state,
        count: state.count - 1,
        totalCount: state.totalCount + 1
      };
    default:
      throw new Error();
  }
};

const CounterWithReducer = () => {
  const [state, dispatch] = useReducer(counterReducer, {
    count: 0,
    totalCount: 0
  });
  const handleIncrease = () => {
    dispatch({ type: "INCREASE" });
  };
  const handleDecrease = () => {
    dispatch({ type: "DECREASE" });
  };

  const style = {
    border: "1px  solid black",
    padding: 10,
    margin: 5
  };

  return (
    <div style={style}>
      <h1>Click Counter with useReducer</h1>
      <hr />
      <h2>Count : {state.count}</h2>
      <h2>Total Count : {state.totalCount}</h2>
      <hr />
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
};

export default CounterWithReducer;

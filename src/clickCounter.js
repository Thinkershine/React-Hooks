import React from "react";

const ClickCounter = () => {
  const [count, setCount] = React.useState(0);
  const [clickCount, setClickCount] = React.useState(0);

  const increaseCounter = () => {
    setTimeout(() => setCount(count => count + 1), 1000);
    setClickCount(clickCount + 1);
  };

  const decreaseCounter = () => {
    setCount(count - 1);
    setClickCount(clickCount + 1);
  };

  const style = {
    border: "1px  solid black",
    padding: 10,
    margin: 5
  };

  return (
    <div style={style}>
      <h1>Click Counter</h1>
      <hr />
      <h2>Count : {count}</h2>
      <h2>Total Clicks : {clickCount}</h2>
      <hr />
      <button onClick={increaseCounter}>Increase</button>
      <button onClick={decreaseCounter}>Increase</button>
    </div>
  );
};

export default ClickCounter;

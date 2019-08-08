import React from "react";

const Filter = ({ dispatch }) => {
  const handleShowAll = () => {
    dispatch({ type: "SHOW_ALL" });
  };

  const handleShowCompleted = () => {
    dispatch({ type: "SHOW_COMPLETED" });
  };

  const handleShowUncompleted = () => {
    dispatch({ type: "SHOW_UNCOMPLETED" });
  };
  return (
    <div>
      <h2> Filter</h2>
      <button onClick={handleShowAll}>Show All</button>
      <button onClick={handleShowCompleted}>Show Completed</button>
      <button onClick={handleShowUncompleted}>Show Uncompleted</button>
    </div>
  );
};

export default Filter;

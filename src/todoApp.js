import React, { useState } from "react";

let initialTodos = [
  {
    id: 1,
    task: "Learn React useState",
    complete: true
  },
  {
    id: 2,
    task: "Learn React useReducer",
    complete: true
  },
  {
    id: 3,
    task: "Learn React useContext",
    complete: true
  }
];

const ToDoApp = () => {
  const [task, setTask] = useState("");
  const [currentID, setCurrentID] = useState(initialTodos.length);

  const handleChangeInput = event => {
    console.log("Change Input", event.target.value);
    setTask(event.target.value);
  };

  const addTask = () => {
    setCurrentID(currentID + 1);
    initialTodos = initialTodos.concat({
      id: currentID + 1,
      task: task,
      completed: true
    });
    console.log("NEW TODOS", initialTodos);
  };

  const style = {
    border: "1px  solid black",
    padding: 10,
    margin: 5
  };

  return (
    <div style={style}>
      <h1>ToDos</h1>
      <hr />
      <ul style={{ listStyle: "none" }}>
        {initialTodos.map(todo => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
      <input placeholder="Add ToDo" value={task} onChange={handleChangeInput} />
      <button onClick={() => addTask()}>Add ToDo</button>
    </div>
  );
};

export default ToDoApp;

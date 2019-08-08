import React, { useState } from "react";
import uuid from "uuid";

const initialTodos = [
  {
    id: uuid(),
    task: "Learn React useState",
    complete: true
  },
  {
    id: uuid(),
    task: "Learn React useReducer",
    complete: true
  },
  {
    id: uuid(),
    task: "Learn React useContext",
    complete: true
  }
];

const ToDoApp = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [task, setTask] = useState("");

  const handleChangeInput = event => {
    console.log("Change Input", event.target.value);
    setTask(event.target.value);
  };

  const addTask = () => {
    setTodos(
      todos.concat({
        id: uuid(),
        task: task,
        completed: true
      })
    );
    setTask("");
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
        {todos.map(todo => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
      <input placeholder="Add ToDo" value={task} onChange={handleChangeInput} />
      <button onClick={() => addTask()}>Add ToDo</button>
    </div>
  );
};

export default ToDoApp;

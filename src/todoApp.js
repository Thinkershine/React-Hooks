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
    setTask(event.target.value);
  };

  const handleChangeCheckbox = id => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      })
    );
  };

  const addTask = () => {
    if (task === "") return;
    setTodos(
      todos.concat({
        id: uuid(),
        task: task,
        completed: false
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
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleChangeCheckbox(todo.id)}
              />
              {todo.completed ? (
                <em style={{ textDecoration: "line-through" }}>{todo.task}</em>
              ) : (
                todo.task
              )}
            </label>
          </li>
        ))}
      </ul>
      <input placeholder="Add ToDo" value={task} onChange={handleChangeInput} />
      <button onClick={() => addTask()}>Add ToDo</button>
    </div>
  );
};

export default ToDoApp;

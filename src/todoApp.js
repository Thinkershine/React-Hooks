import React, { useState, useReducer } from "react";
import uuid from "uuid";

const initialTodos = [
  {
    id: uuid(),
    task: "Learn React useState",
    complete: false
  },
  {
    id: uuid(),
    task: "Learn React useReducer",
    complete: false
  },
  {
    id: uuid(),
    task: "Learn React useContext",
    complete: false
  }
];

const filterReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_ALL":
      return "ALL";
    case "SHOW_COMPLETED":
      return "COMPLETED";
    case "SHOW_UNCOMPLETED":
      return "UNCOMPLETED";
    default:
      throw new Error();
  }
};

const ToDoApp = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [task, setTask] = useState("");

  const [filter, dispatchFilter] = useReducer(filterReducer, "ALL");

  const filteredTodos = todos.filter(todo => {
    console.log("What", todo);
    if (filter === "ALL") {
      return true;
    }

    if (filter === "COMPLETED" && todo.complete) {
      return true;
    }

    if (filter === "UNCOMPLETED" && !todo.complete) {
      return true;
    }

    return false;
  });

  const handleChangeInput = event => {
    setTask(event.target.value);
  };

  const handleChangeCheckbox = id => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      })
    );
  };

  const handleShowAll = () => {
    dispatchFilter({ type: "SHOW_ALL" });
  };

  const handleShowCompleted = () => {
    dispatchFilter({ type: "SHOW_COMPLETED" });
  };

  const handleShowUncompleted = () => {
    dispatchFilter({ type: "SHOW_UNCOMPLETED" });
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
        {filteredTodos.map(todo => (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.complete}
                onChange={() => handleChangeCheckbox(todo.id)}
              />
              {todo.complete ? (
                <em style={{ textDecoration: "line-through" }}>{todo.task}</em>
              ) : (
                todo.task
              )}
            </label>
          </li>
        ))}
      </ul>
      <hr />
      <input placeholder="Add ToDo" value={task} onChange={handleChangeInput} />
      <button onClick={() => addTask()}>Add ToDo</button>
      <hr />
      <button onClick={handleShowAll}>Show All</button>
      <button onClick={handleShowCompleted}>Show Completed</button>
      <button onClick={handleShowUncompleted}>Show Uncompleted</button>
    </div>
  );
};

export default ToDoApp;

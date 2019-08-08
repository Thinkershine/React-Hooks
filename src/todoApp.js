import React, { useState, useReducer } from "react";
import uuid from "uuid";
import Filter from "./filter";

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

const todoReducer = (state, action) => {
  switch (action.type) {
    case "DO_TODO":
      console.log("DO TODO", action);
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, complete: true };
        } else {
          return todo;
        }
      });
    case "UNDO_TODO":
      console.log("UNDO TODO", action);
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, complete: false };
        } else {
          return todo;
        }
      });
    case "ADD_TODO":
      console.log("ADD TODO", action);
      return state.concat({
        id: action.id,
        task: action.task,
        complete: action.complete
      });
    default:
      return new Error();
  }
};

const ToDoApp = () => {
  // OLD With useState
  //   const [todos, setTodos] = useState(initialTodos);
  const [task, setTask] = useState("");

  const [filter, dispatchFilter] = useReducer(filterReducer, "ALL");
  const [todos, dispatchTodos] = useReducer(todoReducer, initialTodos);

  const filteredTodos = todos.filter(todo => {
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

  const handleChangeCheckbox = todo => {
    // Not Elegant Way ...
    // const todo = todos.filter(todo => todo.id === id);
    // console.log("TODO", todo);
    // if (todo.complete) {
    //   dispatchTodos({ type: "UNDO_TODO", id: id });
    // } else {
    //   dispatchTodos({ type: "DO_TODO", id: id });
    // }

    // Much More Elegant Way
    dispatchTodos({
      type: todo.complete ? "UNDO_TODO" : "DO_TODO",
      id: todo.id
    });

    // OLD With useState
    // setTodos(
    //   todos.map(todo => {
    //     if (todo.id === id) {
    //       return { ...todo, complete: !todo.complete };
    //     } else {
    //       return todo;
    //     }
    //   })
    // );
  };

  const addTask = () => {
    if (task === "") return;

    dispatchTodos({
      type: "ADD_TODO",
      id: uuid(),
      task: task,
      complete: false
    });
    // OLD With useState
    // setTodos(
    //   todos.concat({
    //     id: uuid(),
    //     task: task,
    //     completed: false
    //   })
    // );
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
                onChange={() => handleChangeCheckbox(todo)}
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
      <Filter dispatch={dispatchFilter} />
      <input placeholder="Add ToDo" value={task} onChange={handleChangeInput} />
      <button onClick={() => addTask()}>Add ToDo</button>
      <hr />
    </div>
  );
};

export default ToDoApp;

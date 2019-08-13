import React, { useReducer, createContext } from "react";
import uuid from "uuid";
import Filter from "./filter";
import AddToDo from "./addToDo";
import ToDoList from "./toDoList";

export const ToDoContext = createContext(null);

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
    case "LOAD_TODOS":
      console.log("LOAD TODOS", action);
      return (state = action.payload);
    default:
      return new Error();
  }
};

const ToDoApp = () => {
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

  const style = {
    border: "1px  solid black",
    padding: 10,
    margin: 5
  };

  const saveToDo = () => {
    localStorage.setItem("ToDos", JSON.stringify(todos));
  };

  const loadToDo = () => {
    dispatchTodos({
      type: "LOAD_TODOS",
      payload: JSON.parse(localStorage.getItem("ToDos"))
    });
  };

  return (
    <div style={style}>
      <h1>ToDos</h1>
      <ToDoContext.Provider value={dispatchTodos}>
        <hr />
        <ToDoList filteredTodos={filteredTodos} />
        <hr />
        <AddToDo />
        <Filter dispatch={dispatchFilter} />
        <hr />
      </ToDoContext.Provider>
      <button onClick={saveToDo}>Save</button>
      <button onClick={loadToDo}>Load</button>
    </div>
  );
};

export default ToDoApp;

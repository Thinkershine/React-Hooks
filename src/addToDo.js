import React, { useState, useContext } from "react";
import uuid from "uuid";
import { ToDoContext } from "./todoApp";

const AddToDo = () => {
  const dispatch = useContext(ToDoContext);
  const [task, setTask] = useState("");
  const addTask = () => {
    if (task === "") return;

    dispatch({
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

  const handleChangeInput = event => {
    setTask(event.target.value);
  };

  return (
    <div>
      <h2>Add ToDo</h2>
      <input placeholder="Add ToDo" value={task} onChange={handleChangeInput} />
      <button onClick={() => addTask()}>Add ToDo</button>
    </div>
  );
};

export default AddToDo;

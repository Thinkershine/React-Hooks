import React from "react";

const ToDoItem = ({ dispatch, todo }) => {
  const handleChangeCheckbox = () => {
    // Not Elegant Way ...
    // const todo = todos.filter(todo => todo.id === id);
    // console.log("TODO", todo);
    // if (todo.complete) {
    //   dispatchTodos({ type: "UNDO_TODO", id: id });
    // } else {
    //   dispatchTodos({ type: "DO_TODO", id: id });
    // }

    // Much More Elegant Way
    dispatch({
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
  return (
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
  );
};

const ToDoList = ({ filteredTodos, dispatch }) => {
  return (
    <div>
      <h2>Tasks</h2>
      <ul style={{ listStyle: "none" }}>
        {filteredTodos.map(todo => (
          <ToDoItem key={todo.id} dispatch={dispatch} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;

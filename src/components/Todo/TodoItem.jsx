import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../../redux/actions/todoAction";

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "10px",
      }}
    >
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggle}
          style={{ marginRight: "10px" }}
        />
        {todo.completed ? <del>{todo.title}</del> : <span>{todo.title}</span>}
      </div>
      <button
        onClick={handleDelete}
        style={{
          marginLeft: "10px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          padding: "5px 10px",
          cursor: "pointer",
        }}
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;

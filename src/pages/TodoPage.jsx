import React from "react";
import TodoForm from "../components/Todo/TodoForm";
import TodoList from "../components/Todo/TodoList";

function TodoPage() {
  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default TodoPage;

import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const TodoContainer = () => {
  const [todos, setTodos] = useState([]);

  const onAdd = (todo) => {
    setTodos([...todos, { idx: todos.length, todo }]);
  };

  const editTodo = (idx, editedTodo) => {
    const updatedTodo = todos.map((todoObj) => {
      if (todoObj.idx === idx) {
        todoObj.todo = editedTodo;
      }
      return todoObj;
    });
    setTodos(updatedTodo);
  };

  const deleteTodo = (idx) => {
    let filteredTodos = todos.filter((todoObj) => {
      if (todoObj.idx === idx) {
        return false;
      }
      return true;
    });
    setTodos(filteredTodos);
  };

  const removeAllTodo = () => {
    setTodos([]);
  };

  return (
    <div>
      <TodoInput onAdd={onAdd} removeAllTodo={removeAllTodo} />
      <TodoList todos={todos} editTodo={editTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default TodoContainer;

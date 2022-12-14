import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <div>
      {props.todos.map((todoObj, index) => {
        return (
          <Todo
            key={index}
            todoObj={todoObj}
            editTodo={props.editTodo}
            deleteTodo={props.deleteTodo}
          />
        );
      })}
    </div>
  );
};
export default TodoList;

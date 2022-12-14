import React, { useState } from "react";

const TodoInput = (props) => {
  const [todoValue, setTodoValue] = useState("");
  const handleInput = (e) => {
    const todo = e.target.value;
    setTodoValue(todo);
  };
  const handleAdd = () => {
    props.onAdd(todoValue);
    setTodoValue("");
  };
  const handleDeleteAll = () => {
    props.removeAllTodo();
  };

  return (
    <div>
      <input
        value={todoValue}
        onChange={handleInput}
        placeholder="add a todo"
      />
      <button className="Add" onClick={handleAdd}>
        ADD
      </button>
      <button className="Delete_All" onClick={handleDeleteAll}>
        DELETE-ALL
      </button>
    </div>
  );
};
export default TodoInput;

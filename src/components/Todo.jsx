import React, { useState } from "react";
const Todo = (props) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editedValue, setEditedValue] = useState(props.todoObj.todo);

  const handleDelete = () => {
    props.deleteTodo(props.todoObj.idx);
  };

  const handleEdit = () => {
    setIsEdit(true);
  };

  return (
    <div>
      {isEdit ? (
        <>
          <input
            value={editedValue}
            onChange={(e) => {
              const value = e.target.value;
              setEditedValue(value);
            }}
          />
          <button
            className="Save"
            onClick={() => {
              props.editTodo(props.todoObj.idx, editedValue);
              setIsEdit(false);
            }}
          >
            Save
          </button>
          <button
            className="Cancel"
            onClick={() => {
              setEditedValue(props.todoObj.todo);
              setIsEdit(false);
            }}
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <span>{props.todoObj.todo}</span>
          <span>
            <button className="Edit" onClick={handleEdit}>
              Edit
            </button>
          </span>
          <span>
            <button className="Delete" onClick={handleDelete}>
              Delete
            </button>
          </span>
        </>
      )}
    </div>
  );
};
export default Todo;

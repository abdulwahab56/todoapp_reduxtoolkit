import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./feature/TodoSlice";
import { FiSend } from "react-icons/fi";
import "./App.css";

const AddTodo = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const add = () => {
    if (name === "") {
      return setError("your filed are empty");
    }
    dispatch(addTodo({ id: Math.random(), title: name }));
    setName("");
    setError(null);
  };
  return (
    <>
      <div className="list">
        <h1>Todo List</h1>
        <div className="input-sty">
          <input
            type="text"
            value={name}
            placeholder="Enter Some text here"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <FiSend className="icon" onClick={add} />
        </div>
        {error ? <div> {error}</div> : null}
      </div>
    </>
  );
};

export default AddTodo;

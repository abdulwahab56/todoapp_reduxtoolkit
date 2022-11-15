import React from "react";
import { useState } from "react";
import { deleteTodo, updateTodo } from "./feature/TodoSlice";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";

const ListTodo = () => {
  const [newName, setNewName] = useState("");
  const [isEditing, setEditing] = useState(false);
  const [state, setState] = useState({
    id: " ",
    title: " ",
  });
  const dispatch = useDispatch();
  const todolist = useSelector((state) => state.todo.value);
  const changeHandel = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handelEdit = (id, title) => {
    setEditing(true);
    setState({ ...state, id, title });
  };
  const { id, title } = state;
  console.log(title);
  return (
    <div>
      {isEditing ? (
        <div>
          <p>Update todo list</p>

          <div className="edit-list">
            <input
              type="text"
              value={title}
              name="title"
              placeholder="Update todo list"
              onChange={changeHandel}
            />
            <button
              onClick={() => {
                setEditing(false);
                dispatch(updateTodo({ id, title }));
              }}
            >
              Update
            </button>
          </div>
        </div>
      ) : (
        <div>
          {todolist.map(({ id, title }) => {
            return (
              <div key={id} className="todolist">
                <p>{title}</p>
                <div>
                  <button
                    onClick={() => {
                      handelEdit(id, title);
                    }}
                  >
                    Update
                  </button>
                  <button
                    onClick={() => {
                      dispatch(deleteTodo(id));
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ListTodo;

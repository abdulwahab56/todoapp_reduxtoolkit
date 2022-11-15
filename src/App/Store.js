import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../feature/TodoSlice";

export const store = configureStore({
  reducer: { todo: todoReducer },
});

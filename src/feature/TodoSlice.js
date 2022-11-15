import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  value: [{ id: 0, title: "abdul" }],
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      state.value.push(action.payload);
    },
    // prepare: (text) => {
    //   const id = nanoid;
    //   return { payload: { id, text } };
    // }
    // updateTodo List
    updateTodo: (state, action) => {
      const { value } = state;
      state.value = state.value.map((item) => {
        return item.id === action.payload.id ? action.payload.name : item;
      });
      // const id = action.payload;
      // const excitedTodoIndex = state.value.findIndex((list) => list.id === id);
      // if (excitedTodoIndex !== -1) {
      //   state.value = state.value[excitedTodoIndex].push(id);
      // }
    },

    // Delete todo List
    deleteTodo: (state, action) => {
      const id = action.payload;
      const excitedTodoIndex = state.value.findIndex((item) => item.id === id);
      //   console.log(excitedTodoIndex);
      if (excitedTodoIndex !== -1) {
        state.value = state.value.filter((todo) => todo.id !== id);
      }
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;

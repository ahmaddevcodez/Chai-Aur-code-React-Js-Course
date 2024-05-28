import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
  todos: [{ id: nanoid(), text: "Add Todo" }],
};

export const todoSLice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      state.todos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, text } : todo
      );
    },
  },
});
export const { addTodo, removeTodo, deleteTodo, updateTodo } =
  todoSLice.actions;
export default todoSLice.reducer;
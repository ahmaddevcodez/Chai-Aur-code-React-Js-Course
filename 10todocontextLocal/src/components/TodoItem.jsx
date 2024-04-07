import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <div className="flex items-center justify-between p-4 rounded-lg shadow-md bg-white">
      <input
        type="checkbox"
        className="form-checkbox mr-1 h-6 w-6 text-indigo-600 rounded-md"
        checked={todo.completed}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={`flex-grow px-4 py-2 bg-transparent outline-none text-gray-800 ${
          isTodoEditable ? "border-2 border-gray-400" : ""
        } ${todo.completed ? "line-through" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      <div className="flex items-center">
        <button
          className={`p-2 rounded-full text-white bg-indigo-600 hover:bg-indigo-700 ${
            todo.completed ? "cursor-not-allowed" : "cursor-pointer"
          }`}
          onClick={() => {
            if (todo.completed) return;

            if (isTodoEditable) {
              editTodo();
            } else setIsTodoEditable((prev) => !prev);
          }}
          disabled={todo.completed}
        >
          {isTodoEditable ? "Save" : "Edit"}
        </button>
        <button
          className="ml-2 p-2 rounded-full text-white bg-red-600 hover:bg-red-700 cursor-pointer"
          onClick={() => deleteTodo(todo.id)}
        >
          ❌
        </button>
      </div>
    </div>
  );
}

export default TodoItem;

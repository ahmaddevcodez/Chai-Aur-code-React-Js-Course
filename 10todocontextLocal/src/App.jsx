import { useState } from "react";
import { v4 as uuid } from "uuid"; // Import uuid function from the appropriate library
import "./App.css";
import { TodoProvider } from "./contexts";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, { id: uuid(), ...todo }]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  // const deleteTodo = () => {};
  // const toggleComplete = () => {};

  return (
    <TodoProvider
      value={{
        todos,
        addTodo,
        updateTodo,
        // deleteTodo,
        // toggleComplete,
      }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">{/* Todo form goes here */}</div>
          <div className="flex flex-wrap gap-y-3">
            {/* Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

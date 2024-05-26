import React from "react";
import "./App.css";
import AddTodos from "./components/AddTodos";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <h1>Ahmad Aur Code</h1>
      <AddTodos />
      <Todos />
    </>
  );
}

export default App;

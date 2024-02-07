import React, { useState, useContext } from "react";
import UserContext from "../Context/UserContext";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <div>
      <h1 className="text-center   text-6xl mb-5 ">Login </h1>
      <input
        className="pt-2 pb-2 rounded-lg w-80 ml-1 text-center"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        type="text"
        required
        placeholder="UserName"
      />
      <input
        className="pt-2 pb-2 rounded-lg w-80 ml-1 text-center "
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="password"
        required
        placeholder="Password"
      />
      <button
        className="bg-btnColor p-2 rounded-lg"
        required
        onClick={handleSubmit}
        type="submit "
      >
        Submit
      </button>
    </div>
  );
}

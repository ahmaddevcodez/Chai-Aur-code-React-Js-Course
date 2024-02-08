import { useContext } from "react";
import Login from "./Component/Login";
import Profile from "./Component/Profile";
import UserContextProvider from "./Context/UserContextProvider";
import UserContext from "./Context/UserContext";

function App() {
  const { setUser, user } = useContext(UserContext);
  return (
    <div className="relative flex justify-center align-middle mt-32">
      <Login />
      {JSON.stringify(user)}
      <div className=" absolute top-32">
        <Profile />
      </div>
      <button onClick={() => setUser(null)}> reset</button>
    </div>
  );
}
export default App;

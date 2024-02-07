import Login from "./Component/Login";
import Profile from "./Component/Profile";
import UserContextProvider from "./Context/UserContextProvider";

function App() {
  return (
    <div className="relative flex justify-center align-middle mt-32">
      <UserContextProvider>
        <Login />
        <div className=" absolute top-32">
          <Profile />
        </div>
      </UserContextProvider>
    </div>
  );
}
export default App;

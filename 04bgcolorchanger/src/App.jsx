import { useState } from "react";
function App() {
  const [Color, setColor] = useState("green");

  return (
    <div className="w-full h-screen" style={{ backgroundColor: Color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"></div>
      </div>
    </div>
  );
}

export default App;

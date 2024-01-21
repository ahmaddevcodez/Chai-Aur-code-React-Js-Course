import { useState } from "react";
import "./App.css";
import Card from "./components/card";

function App() {
  return (
    <>
      <Card
        Name="Ahmad Aur Code"
        Paragraph="He is a good girl"
        BtnText="Say Hi"
        Src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
      />
      <Card
        Name="Waleed Aur Code"
        Paragraph="Waleed is going to Lahore"
        BtnText="Connect With me"
        Src="https://placekitten.com/203/600"
      />
    </>
  );
}

export default App;

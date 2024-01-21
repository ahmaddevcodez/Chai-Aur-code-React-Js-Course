import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1>I love Cricket</h1>
    </div>
  );
}

const AnotherElement = (
  <a href="https://chat.openai.com/" target="_blank">
    Visit Future
  </a>
);

// Use Unicode character for non-breaking space
const anotherUser = "\u00A0Ahmad Aur Code";

const ReactElement = React.createElement(
  "a",
  {
    href: "https://chat.openai.com/",
    target: "_blank",
  },
  "Click Me To Visit OpenAi",
  anotherUser
);

ReactDOM.createRoot(document.getElementById("root")).render(ReactElement);

function customRender(reactElement, Container) {
  //   const domELement = document.createElement(reactElement.type);
  //   domELement.innerHTML = reactElement.children;
  //   domELement.setAttribute("href", reactElement.props.herf);
  //   domELement.setAttribute("target", reactElement.props.target);
  //   Container.appendChild(domELement);
  const domELement = document.createElement(reactElement.type);
  domELement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop == "children") continue;
    domELement.setAttribute(prop, reactElement.props[prop]);
  }
  Container.appendChild(domELement);
}

const reactElement = {
  type: "a",
  props: { herf: "https://chat.openai.com/ ", target: "_blank" },
  children: "Click Me To Visit OpenAi",
};
const mainContainer = document.querySelector("#root");
customRender(reactElement, mainContainer);

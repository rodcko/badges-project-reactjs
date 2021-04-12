import React from "react";
import ReactDOM from "react-dom";

const jsx = <h1>Hola, Rodcko from !</h1>;
const element = React.createElement(
  "a",
  { href: "https://platzi.com" },
  "Ir a Platzi"
);
const container = document.getElementById("app");

// ReactDOM.render(__que__, __donde__);
ReactDOM.render(element, container);

import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

import "./global.css";
import Badge from "./components/Badge";

const container = document.getElementById("app");

ReactDOM.render(
  <Badge
    firstName="Rodrigo"
    lastName="Hernandez"
    avatarUrl="https://secure.gravatar.com/avatar/a2d1c6738a16234e1c63f2d637c23130"
    jobTitle="Software Architect"
    twitter="rodcko_"
  />,
  container
);

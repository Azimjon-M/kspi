import React from "react";
import "./style.css";

import { useRoutes } from "react-router-dom";
import { routes } from "../../routes/index";

function App() {
  let content = useRoutes(routes);
  return <div>{content}</div>;
}

export default App;

import React from "react";
import ReactDOM from "react-dom";
import MyHeader from "./components/Header";
import MyInfo from "./components/MyInfo";

require("./styles/styles.scss");

ReactDOM.render(
  <div>
    <MyHeader />
    <MyInfo />
  </div>,
  document.getElementById("root")
);

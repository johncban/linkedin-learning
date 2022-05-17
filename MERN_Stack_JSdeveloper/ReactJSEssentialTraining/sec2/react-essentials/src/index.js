import React from "react";
//import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App /> /*document.getElementById("root")*/);

//ReactDOM.render(
//React.createElement("h1", { style: { color: "blue" } }, "Hey Everyone!"),
/*
  React.createElement(
    "ul",
    null,
    React.createElement("li", null, "Monday"),
    React.createElement("li", null, "Tuesday"),
    React.createElement("li", null, "Wednesday"),
    React.createElement("li", null, "Thursday"),
    React.createElement("li", null, "Friday"),
    React.createElement("li", null, "Saturday"),
    React.createElement("li", null, "Sunday")
  ),
  */
/*
  <ul>
    <li>Monday</li>
    <li>Tuesday</li>
    <li>Wednesday</li>
    <li>Thursday</li>
    <li>Friday</li>
    <li>Satday</li>
    <li>Sunday</li>
  </ul>,
  */
//<App />,
//document.getElementById("root")
//);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

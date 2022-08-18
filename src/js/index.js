//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import  { App } from "../js/index.js"
// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
ReactDOM.render(<div>Hola Mundo$$$</div>, document.querySelector("#app"));

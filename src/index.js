import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Hero from "./Hero";
import reportWebVitals from "./reportWebVitals";
import Hamburger from "./Hamburger";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Hamburger />
    <Hero />
    <App />
  </React.StrictMode>
);

reportWebVitals();

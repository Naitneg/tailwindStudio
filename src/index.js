import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import LoadingContextProvider from "./Context/Loading";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LoadingContextProvider>
    <App />
  </LoadingContextProvider>
);

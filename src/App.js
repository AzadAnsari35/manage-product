import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Routes from "./routes";
import store from "./Store/createStore";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;

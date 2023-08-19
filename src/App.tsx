import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Message from "./components/Message";
import ListGroup from "./components/ListGroup";
import { fetchData, logIn } from "./components/fetchingData";

function App() {
  logIn("Aleksander", "CHelovechek17");
  const data = fetchData();
  return (
    <div>
      <Message />
      <ListGroup />
    </div>
  );
}

export default App;

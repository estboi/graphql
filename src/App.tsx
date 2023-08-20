import React from "react";
import "./App.css";
import LoginPage from "./components/login";
import { fetchData, fetchLogin } from "./components/fetchingData";

function App() {
  fetchLogin("Aleksander", "CHelovechek17");
  fetchData();
  return (
    <div>
      <LoginPage />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";
import LoginPage from "./components/login";
import MainPage from "./components/mainPage";
import { fetchLogin } from "./components/fetchingData";

function App() {
  const [user, setUser] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");

    const loggedIn = await fetchLogin(username, password);
    if (!loggedIn) {
      alert("Incorrect username or password");
    }

    setUser(loggedIn);
  };

  const Logout = () => {
    setUser(false);
    localStorage.removeItem("token");
  };

  return (
    <div id="App">
      {user ? (
        <MainPage login={setUser} Logout={Logout}></MainPage>
      ) : (
        <LoginPage handleSubmit={handleSubmit}></LoginPage>
      )}
    </div>
  );
}

export default App;

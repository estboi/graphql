import { fetchLogin } from "./fetchingData";

function LoginPage({ handleSubmit }: any) {
  return (
    <div id="loginPage">
      <div id="loginDiv">
        <h1>LOGIN</h1>
        <form id="loginForm" onSubmit={handleSubmit}>
          <input
            className="input"
            placeholder="username"
            name="username"
          ></input>
          <input
            className="input"
            placeholder="password"
            name="password"
            type="password"
          ></input>
          <button className="submit" type="submit">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;

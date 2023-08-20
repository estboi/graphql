import { fetchLogin } from "./fetchingData";

function LoginPage() {
  return (
    <div id="loginDiv">
      <h1>LOGIN</h1>
      <form id="loginForm" onSubmit={handleSubmit}>
        <input placeholder="username" name="username"></input>
        <input placeholder="password" name="password" type="password"></input>
        <button>SUBMIT</button>
      </form>
    </div>
  );
}

const handleSubmit = async (e: any) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const username = formData.get("username");
  const password = formData.get("password");

  const loggedIn = await fetchLogin(username, password);

  if (loggedIn) {
  }
};

export default LoginPage;

function Header({ Logout }: any) {
  return (
    <div id="Header">
      <h2 id="Title">My Kood/Jõhvi</h2>
      <button id="logoutButton" className="submit" onClick={Logout}>
        LOGOUT
      </button>
    </div>
  );
}

export default Header;

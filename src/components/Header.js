import SearchBar from "./SearchBar";
import firebase from "../Firebase/firebase.js";
import { Link } from "react-router-dom";

const Avatar = ({ isLoggedIn }) => {
  const logout = () => {
    firebase.auth().signOut();
  };

  if (isLoggedIn) {
    return (
      <>
        <p>🙋‍♂️</p>
        <button onClick={logout}>wyloguj mnie</button>
      </>
    );
  }
  return (
    <Link to={`/login`}>
      <button style={{ margin: "20px" }}> ZALOGUJ MNIE </button>
    </Link>
  );
};

const Header = ({ setSearch, isLoggedIn }) => {
  return (
    <div className="Header">
      <h1>PIWKO</h1>
      <SearchBar setSearch={setSearch} />
      <Avatar isLoggedIn={isLoggedIn} />
    </div>
  );
};

export default Header;

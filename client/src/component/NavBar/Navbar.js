import React from "react";
import "./navbar.css";
const Navbar = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <img
        src={user.avatar_url}
        width="50"
        height="50"
        className="mr-3 avatar"
        alt="user"
      />

      <h3 style={{ color: "white", margin: "0 10px" }}>{user.name}</h3>

      <a
        className="ml-auto d-flex align-items-center"
        href="/"
        style={{ textAlign: "right" }}
      >
        Search Other User
      </a>
    </nav>
  );
};

export default Navbar;

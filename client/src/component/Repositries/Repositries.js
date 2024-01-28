import React from "react";
import "./repo.css";
import Repositry from "./Repositry";
const Repositries = ({ repos, user }) => {
  return (
    <section className="repositories">
      {repos.map((repo) => (
        <Repositry key={repo.id} repo={repo} user={user} />
      ))}
    </section>
  );
};

export default Repositries;

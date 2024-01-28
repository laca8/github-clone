import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const Home = () => {
  const [username, setUsername] = useState("");

  const navigtor = useNavigate();
  const add = () => {
    console.log(username);

    if (username != "") {
      //console.log(location);
      //location.hash(`/${username}`);
      navigtor(`/${username}`);
      setUsername("");
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "40%",
        margin: "auto",
        padding: "10px",
      }}
    >
      <div>
        <img
          src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/036/719/original/imageGitHub.png?1654785320"
          alt="github"
        />
      </div>
      <div style={{ marginTop: "10px" }}>
        <p style={{ fontSize: "15px", fontWeight: "bold", color: "gray" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div
        style={{
          marginTop: "10px",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter Username"
          style={{
            width: "80%",
            padding: "5px",
            border: "5px solid gray",
            borderRadius: "10px",
          }}
        />
        <button
          onClick={add}
          style={{
            width: "15%",
            backgroundColor: "gray",
            color: "#fff",
            border: "5px solid gray",
            borderRadius: "10px",
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Home;

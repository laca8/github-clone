import React from "react";
import Navbar from "../component/NavBar/Navbar";
import Repositries from "../component/Repositries/Repositries";
import Tab from "../component/tabs/Tab";
import UserInfo from "../component/userInfo/UserInfo";
import { useParams } from "react-router-dom";
import { getUserData, getUserRepo } from "../api/Api";
import { useState } from "react";
import { useEffect } from "react";
import Loading from "../component/Loader/Loading";
const UserPage = () => {
  const { username } = useParams();
  console.log(username);
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    fetchUser();
    fetchRepo();
  }, [username]);
  async function fetchUser() {
    const { data } = await getUserData(username);
    setUser(data);
  }
  async function fetchRepo() {
    const { data } = await getUserRepo(username);
    setRepos(data);
  }
  return (
    <div>
      {user ? (
        <>
          <Navbar user={user} />
          <div className="container">
            <UserInfo user={user} />
            <Tab repos={repos} user={user} />
            <Repositries repos={repos} user={user} />
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default UserPage;

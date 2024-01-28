import axios from "axios";
const URL_BASE = "https://api.github.com";
export async function getUserData(username) {
  const userInfo = await axios.get(`${URL_BASE}/users/${username}`);
  console.log(userInfo);
  return userInfo;
}

export async function getUserRepo(username) {
  const repos = await axios.get(`${URL_BASE}/users/${username}/repos`);
  console.log(repos);
  return repos;
}

import React from "react";
import "./userInfo.css";
const UserInfo = ({ user }) => {
  return (
    <div className="user__info">
      <img
        src={user.avatar_url}
        className="p-2 avatar"
        width="130"
        height="130"
        alt="profile_image"
      />
      <div className="user__infoDetails">
        <h5>{user.name}</h5>
        <div className="user-infos">
          <div className="user__infoDetail">
            {user.location && (
              <>
                <i className="fa fa-map-marker pr-1" />
                <span>{user.location}</span>
              </>
            )}
          </div>
          <div className="user__infoDetail">
            {user.blog && (
              <>
                <i className="fa fa-globe pr-1" />
                <span>{user.blog}</span>
              </>
            )}
          </div>
          <div className="user__infoDetail">
            {user.email && (
              <>
                <i className="fa fa-envelope pr-1" />
                <span>{user.email}</span>
              </>
            )}
          </div>
          <div className="user__infoDetail">
            {user.twitter_username && (
              <>
                <i className="fa fa-twitter pr-1" />
                <span>{user.twitter_username}</span>
              </>
            )}
          </div>
          <div className="user__infoDetail">
            <i className="fa fa-group pr-1" />
            <span>{user.followers} followers</span>
          </div>
          <div className="user__infoDetail">
            <i className="fa fa-heart pr-1" />
            <span>{user.following} following</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;

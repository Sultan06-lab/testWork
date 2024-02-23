import React from "react";
import avatar from "../../../../shared/assets/avatar.png";
import "./Profile.scss";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ProfileProps {
  collapsed: boolean;
  toggleOpen: () => void;
}
const Profile = (props: ProfileProps) => {
  const { collapsed, toggleOpen } = props;
  return (
    <div className={classNames("UserBlock", { UserBlockCollapsed: collapsed })}>
      <div className="UserInfo">
        <button onClick={toggleOpen}>
          <img src={avatar} alt="avatar" width={"30px"} />
        </button>
        {!collapsed && (
          <div>
            <span>"User Account"</span>
            <p className="UserName">"User Account"</p>
          </div>
        )}
      </div>
      {!collapsed && (
        <div>
          <button className="UserButton">
            <FontAwesomeIcon icon={"user-large"} width={"40px"} />
          </button>
        </div>
      )}
    </div>
  );
};
export default Profile;

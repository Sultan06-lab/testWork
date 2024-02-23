import React from "react";
import { useRef } from "react";
import avatar from "../../../shared/assets/avatar.png";
import "./DropDown.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

interface DropDownProps {
  isOpen: boolean;
  toggleOpen: () => void;
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
}

const DropDown: React.FC<DropDownProps> = (props) => {
  const { isOpen, toggleOpen, right, left, top, bottom } = props;
  const listRef = useRef(null);

  return (
    <div className={classNames("DropDown", { opened: isOpen })} ref={listRef}>
      <div className="UserInfo UserInfo-DropDown">
        <img src={avatar} alt="avatar" width={"30px"} />
        <div>
          <p className="UserName">Mark Talbierz</p>
          <span>ivanov@mail.ru</span>
        </div>
      </div>
      <div className="UserNavBar UserNavBar-DropDown">
        <p>View Profile</p>
        <p>Manage subscription</p>
        <p>View history</p>
      </div>
      <div className="DropDownBottom">
        <div className="BottomText">
          <p>Log out</p>
          <div>
            <span>v 1.0.34 - </span>
            <span>Terms and Conditions</span>
          </div>
        </div>
        <button onClick={toggleOpen}>
          <FontAwesomeIcon icon={"xmark"} width={"30px"} />
        </button>
      </div>
    </div>
  );
};

export default DropDown;

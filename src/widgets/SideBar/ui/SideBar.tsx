import React from "react";
import "./sidebar.scss";
import { useState } from "react";
import classnames from "classnames";
import sun from "../../../shared/assets/sun.svg";
import moon from "../../../shared/assets/moon.svg";
import logo from "../../../shared/assets/logo.png";
import { NavBar } from "../../NavBar";
import {
  routes,
  bottomRoutes,
} from "../../../shared/config/RouterConfig/RouterConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Profile from "./Profile/Pfofile";
import DropDown from "../../../shared/ui/DropDown/DropDown";
import { Theme } from "../../../app/App";

export const SideBar = (props) => {
  const { theme, toggleTheme } = props;
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>("Sales");

  const toggleSidebar = () => {
    setCollapsed((prev) => !prev);
  };

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const containerClassnames = classnames("SideBar", {
    collapsed: collapsed,
    theme: theme === Theme.DARK,
  });

  const currentThemeIcon =
    theme === "light" ? (
      <img src={sun} alt="sun" width="20px" />
    ) : (
      <img src={moon} alt="moon" width="20px" />
    );
  return (
    <div className={containerClassnames}>
      <button className="ThemeButton" onClick={toggleTheme}>
        {currentThemeIcon}
      </button>
      <div className={classnames("logo", { logo_collapsed: collapsed })}>
        <img src={logo} alt="TensorFlow logo" width={"30px"} />
        {collapsed ? "" : <span>Technifly</span>}
      </div>
      <button
        className={classnames("toggleButton", {
          toggleButtonCollapsed: collapsed,
        })}
        onClick={toggleSidebar}
      >
        <FontAwesomeIcon
          className={classnames({
            ArrowCollapsed: collapsed && theme === Theme.DARK,
          })}
          icon={collapsed ? "angle-right" : "angle-left"}
          fill="white"
        />
      </button>
      <div className="topNavBar">
        <NavBar
          className="link"
          routes={routes}
          collapsed={collapsed}
          activeLink={activeLink}
          setActiveLink={setActiveLink}
        />
      </div>
      <div className="bottomNavBar">
        <NavBar
          className="link"
          routes={bottomRoutes}
          collapsed={collapsed}
          activeLink={activeLink}
          setActiveLink={setActiveLink}
        />
      </div>
      <div>
        <Profile collapsed={collapsed} toggleOpen={toggleOpen} />
      </div>
      <DropDown isOpen={isOpen} toggleOpen={toggleOpen} />
    </div>
  );
};

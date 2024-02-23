import React, { Dispatch, SetStateAction } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Route } from "../../../shared/config/RouterConfig/RouterConfig";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import classnames from "classnames";
import "./NavBar.scss";

interface NavBarProps {
  className?: string;
  routes: Route[];
  collapsed?: boolean;
  activeLink: string;
  setActiveLink: Dispatch<SetStateAction<string>>;
}
export const NavBar = (props: NavBarProps) => {
  const { className, routes, collapsed, activeLink, setActiveLink } = props;

  const toggleActive = (link: string) => {
    setActiveLink(link === activeLink ? "" : link);
  };

  const containerClassnames = (link: string) =>
    classnames(
      "link",
      {
        hovered: true,
        active: link === activeLink,
        link_collapsed: collapsed,
      },
      { className }
    );

  return (
    <ul>
      {routes.map((route) => (
        <li
          onClick={() => toggleActive(route.title)}
          className={containerClassnames(route.title)}
          key={route.title}
        >
          <FontAwesomeIcon icon={route.icon as IconProp} />
          {collapsed ? "" : <span>{route.title}</span>}
        </li>
      ))}
    </ul>
  );
};

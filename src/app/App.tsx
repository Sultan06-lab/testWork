import React from "react";
import { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { SideBar } from "../widgets/SideBar";
import classnames from "classnames";

import "./styles/index.scss";

library.add(fas);

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

const App = () => {
  const [theme, setTheme] = useState(Theme.LIGHT);

  const containerClassnames = classnames("app", theme, {});

  const toggleTheme = () => {
    setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };
  return (
    <div className={containerClassnames}>
      <SideBar toggleTheme={toggleTheme} theme={theme} />
    </div>
  );
};

export default App;

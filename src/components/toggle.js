import React from "react";
import ReactToggle from "react-toggle";
import "react-toggle/style.css";
import { ThemeToggler } from "gatsby-plugin-dark-mode";

const Toggle = () => (
  <ThemeToggler>
    {({ _, toggleTheme }) => (
      <ReactToggle
        onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
        checked={window.__theme === "dark"}
        aria-label="Switch between Dark and Light mode"
        icons={{
          checked: "🌙",
          unchecked: "🌞",
        }}
      />
    )}
  </ThemeToggler>
);
export default Toggle;

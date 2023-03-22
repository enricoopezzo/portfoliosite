import React, { useEffect } from "react";

export const Header = () => {
  useEffect(() => {
    const toggle = document.querySelector(".switch input");
    const handleToggleChange = () => {
      const element = document.querySelector("html");
      element.classList.toggle("light");
    };
    toggle.addEventListener("change", handleToggleChange);
    return () => {
      toggle.removeEventListener("change", handleToggleChange);
    };
  }, []);

  return (
    <header>
        <div className="logo">
            <h1>enrico opezzo</h1>
            <h2>front end developer</h2>
        </div>
        <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
        </label>
    </header>
  );
};

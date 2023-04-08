import React, { useEffect, useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const Mode = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (window.matchMedia("{prefers-color-scheme: dark}").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const icon =
    theme === "light" ? (
      <BsFillSunFill color="yellow" size="30px" />
    ) : (
      <BsFillMoonStarsFill color="white" size="30px" />
    );

  return (
    <button
      onClick={handleThemeSwitch}
      className="fixed bottom-16 z-30 rounded-full ml-1 p-2 duration-100 bg-bg-btn hover:bg-bg-sec"
    >
      {icon}
    </button>
  );
};

export default Mode;

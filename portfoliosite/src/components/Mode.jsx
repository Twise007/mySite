import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import { BsFillSunFill, BsMoonStarsFill, BsGithub } from "react-icons/bs";

const Mode = () => {
  const [toggle, setToggle] = useState(false);

  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };

  const toggleTheme = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };

  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <input
          type="checkbox"
          className="toggle"
          checked
          onChange={toggleTheme}
          id="darkmode-toggle"
        />
      </label>
      {/* <BsGithub className="text-2xl hover:text-3xl duration-500 text-white" /> */}
    </div>
  );
};

export default Mode;

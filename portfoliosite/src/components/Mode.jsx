import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import { BsFillSunFill, BsMoonStarsFill, BsGithub } from "react-icons/bs";

const Mode = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div
      className={`${styles.paddingX} left-4 fixed bottom-[4pc] z-20 transCard w-10 h-10 rounded-full flex justify-center items-center`}
    >
      <BsGithub className="text-2xl hover:text-3xl duration-500 text-white" />
    </div>
  );
};

export default Mode;

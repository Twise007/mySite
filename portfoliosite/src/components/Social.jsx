import React from "react";
import {
  BsGithub,
  BsFacebook,
  BsTwitter,
  BsLinkedin,
} from "react-icons/bs";

const datas = [
  { link: "https://facebook.com/OgbeniTundeoke", icon: <BsFacebook /> },
  { link: "https://twitter.com/tundeoke007", icon: <BsTwitter /> },
  { link: "https://github.com/Twise007", icon: <BsGithub /> },
  { link: "https://linkedin.com/in/tunde-oke-607684171", icon: <BsLinkedin /> },
];

const Social = () => {
  return (
    <div className="pt-2">
      <ul className="flex flex-row items-center justify-start h-16 gap-2 list-none">
        {datas.map((data, index) => (
          <div
            key={index}
            onClick={() => window.open(data.link, "_blank")}
            className="flex items-center justify-center w-12 h-12 text-2xl text-white duration-700 rounded-full cursor-pointer transCard hover:w-14 hover:h-14 hover:text-3xl hover:text-bg-sec hover:bg-white"
          >
            <li>{data.icon}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Social;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  BsFillChatQuoteFill,
  BsFillPersonLinesFill,
  BsFillPieChartFill,
  BsPersonVcard,
} from "react-icons/bs";
import Hamburger from "hamburger-react";
import { logo } from "../assets";
import { styles } from "../styles";

const navLinks = [
  { title: "About", id: "about", icon: <BsFillPersonLinesFill /> },
  { title: "Project", id: "project", icon: <BsFillPieChartFill /> },
  { title: "Testimonies", id: "testimonies", icon: <BsFillChatQuoteFill /> },
  { title: "Contact", id: "contact", icon: <BsPersonVcard /> },
];

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } navbar w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled
          ? "bg-bg-primary dark:bg-bg-white"
          : "bg-transparent dark:bg-bg-white"
      }`}
    >
      <div className="flex items-center justify-between w-full mx-auto max-w-7xl">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="object-contain w-9 h-9" />
          <p className="text-[18px] font-bold cursor-pointer flex hover:text-bg-btn">
            TeeTech &nbsp;
            <span className="hidden sm:block"> | Portfolio</span>
          </p>
        </Link>

        <ul className="flex-row hidden gap-10 list-none md:flex">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title
                  ? "text-bg-btn"
                  : "text-bg-white dark:text-bg-primary"
              } hover:text-bg-btn dark:hover:text-bg-btn text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-end flex-1 md:hidden">
          <Hamburger toggled={toggle} toggle={setToggle} />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } pt-6 absolute top-16 right-0 my-3 min-w-[140px] min-h-screen bg-bg-primary dark:bg-bg-white`}
          >
            <ul className="flex flex-col justify-start flex-1 gap-4 list-none menu">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`w-[13pc] font-poppins font-medium cursor-pointer text-[16px] hover:text-[18px] ${
                    active === nav.title ? "text-bg-btn" : ""
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a
                    className="duration-300 rounded-md hover:text-bg-btn"
                    href={`#${nav.id}`}
                  >
                    <span className="text-[26px] text-bg-btn">{nav.icon}</span>
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

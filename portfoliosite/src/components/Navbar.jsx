import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsFillChatQuoteFill, BsFillPersonLinesFill, BsFillPieChartFill, BsPersonVcard } from 'react-icons/bs';
import { logo, menu, close } from "../assets";

import { styles } from "../styles";

const navLinks = [
  {title:'About',id:'about',icon:<BsFillPersonLinesFill/>},
  {title:'Project',id:'project',icon:<BsFillPieChartFill/>},
  {title:'Testimonies',id:'testimonies',icon:<BsFillChatQuoteFill/>},
  {title:'Contact',id:'contact',icon:<BsPersonVcard/>},
  ]

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
        scrolled ? "bg-bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain'/>
          <p className='text-bg-white text-[18px] font-bold cursor-pointer flex'>
            TeeTech &nbsp;
            <span className='sm:block hidden'> | Portfolio</span>
          </p>
        </Link>

        <ul className='list-none hidden md:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-bg-btn" : "text-bg-hoverT"
              } hover:text-bg-btn text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className='md:hidden flex flex-1 justify-end items-center'>
        <img
              src={toggle ? close : menu}
              alt='menu'
              className='w-[28px] h-[28px] object-contain'
              onClick={() => setToggle(!toggle)}
          />
          
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } pt-6 px-6 absolute top-16 right-0 my-3 min-w-[140px] min-h-screen transCard`}
          >
            <ul className='list-none flex justify-start flex-1 flex-col gap-4 menu'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`w-[11pc] font-poppins font-medium cursor-pointer text-[16px] hover:text-[18px] hover:text-bg-btn w-full ${
                    active === nav.title ? "text-bg-btn" : "text-bg-hoverT"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a className="rounded-md duration-300" href={`#${nav.id}`}><span className="text-[26px] text-bg-btn">{nav.icon}</span>{nav.title}</a>
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
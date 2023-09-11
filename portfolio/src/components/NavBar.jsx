import React from "react";
import { Link } from "react-router-dom";
import useActiveLink from "../hooks/activateLinks";
import { navList } from "../data/navList";

const NavBar = ({ setDisplaySideBar }) => {
  const { activeLink, isLinkActive } = useActiveLink();

  return (
    <nav className="flex items-center justify-between lg:px-24 px-8 h-20 sticky top-0 backdrop-blur-md bg-white/30 z-10">
      <span className="font-bold text-2xl tracking-[8px]">LOGO</span>
      <span className="lg:hidden flex">
        <img
          width="33"
          height="50"
          src="https://img.icons8.com/ios-filled/50/menu--v6.png"
          alt="menu--v6"
          onClick={() => setDisplaySideBar(true)}
        />
      </span>
      <ul className="hidden lg:flex items-center justify-center gap-16 font-semibold text-[18px]">
        {navList.map((item, index) => {
          return (
            <li key={index}>
              <Link
                to={item.path}
                className={`px-2 ${
                  isLinkActive(item.path)
                    ? "border-b-2 border-[#4990EB] pb-2"
                    : ""
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}

        <button className="px-5 py-2 bg-[#4990EB] text-white rounded-md font-normal shadow-lg">
          Download CV
        </button>
      </ul>
    </nav>
  );
};

export default NavBar;

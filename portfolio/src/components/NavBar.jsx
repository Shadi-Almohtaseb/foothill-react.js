import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");

  React.useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const isLinkActive = (path) => path === activeLink;

  return (
    <nav className="flex items-center justify-between lg:px-24 px-8 h-20 sticky top-0 backdrop-blur-md bg-white/30 z-10">
      <span className="font-bold text-2xl tracking-[8px]">LOGO</span>
      <span className="lg:hidden flex">
        <img
          width="33"
          height="50"
          src="https://img.icons8.com/ios-filled/50/menu--v6.png"
          alt="menu--v6"
        />
      </span>
      <ul className="hidden lg:flex items-center justify-center gap-16 font-semibold text-[18px]">
        <li>
          <Link
            to="/"
            className={`px-2 ${
              isLinkActive("/") ? "border-b-2 border-[#4990EB] pb-2" : ""
            }`}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/skills"
            className={`px-2 ${
              isLinkActive("/skills") ? "border-b-2 border-[#4990EB] pb-2" : ""
            }`}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className={`px-2 ${
              isLinkActive("/projects")
                ? "border-b-2 border-[#4990EB] pb-2"
                : ""
            }`}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={`px-2 ${
              isLinkActive("/contact") ? "border-b-2 border-[#4990EB] pb-2" : ""
            }`}
          >
            Contact
          </Link>
        </li>
        <button className="px-5 py-2 bg-[#4990EB] text-white rounded-md font-normal shadow-lg">
          Download CV
        </button>
      </ul>
    </nav>
  );
};

export default NavBar;

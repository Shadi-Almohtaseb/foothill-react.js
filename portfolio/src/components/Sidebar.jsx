import React from "react";
import { Link } from "react-router-dom";
import useActiveLink from "../hooks/activateLinks";
import { navList } from "../data/navList";

const Sidebar = ({ displaySideBar, setDisplaySideBar }) => {
  const { activeLink, isLinkActive } = useActiveLink();

  return (
    <div
      onClick={() => setDisplaySideBar(false)}
      className={
        displaySideBar
          ? "fixed right-0 top-0 w-full h-full bg-black/50 z-10"
          : ""
      }
    >
      <div
        className={
          displaySideBar
            ? "fixed right-0 top-0 w-[80%] sm:w-[60%] md:w-[45%] lg:w-[35%] h-full bg-[#fff] p-2 ease-in duration-500 overflow-y-auto scrollbar-hide"
            : "fixed right-[-170%] top-0 ease-in duration-500 bg-[#fff] h-full"
        }
      >
        <div className="flex items-center justify-between gap-8 p-4 border-b-2">
          <img
            width="40"
            height="40"
            src="https://img.icons8.com/ios/50/00000/delete-sign--v1.png"
            alt="delete-sign--v1"
            onClick={() => setDisplaySideBar(false)}
          />
        </div>
        <div className="pl-16">
          {navList.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => setDisplaySideBar(false)}
                className="list-none mt-20 text-2xl"
              >
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
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

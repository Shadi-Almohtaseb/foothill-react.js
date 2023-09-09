import React from "react";
import projectImage1 from "../images/Projects/tw5.png";

const ProjectCard = () => {
  return (
    <div className="flex items-center bg-[#4990EB] p-4 rounded-lg mt-5 shadow-lg">
      <img src={projectImage1} alt="" className="w-[25rem] h-fit rounded-lg " />
      <div className=" w-full">
        <div className="flex items-center justify-between gap-9 ml-10">
          <span className="text-[1.6rem] text-white">Twitter Clone</span>
          <div className="flex items-center justify-between self  gap-7">
            <img
              width="28"
              height="28"
              src="https://img.icons8.com/glyph-neue/64/FFFFFF/github.png"
              alt="github"
            />
            <img
              width="28"
              height="28"
              src="https://img.icons8.com/material-sharp/24/FFFFFF/visible.png"
              alt="visible"
            />
          </div>
        </div>
        <div className="ml-10 mt-4 text-white">
          <p>
            A fully responsive Full stack application with Similar Twitter UI,
            and Google authentication, CRUD operations for tweets, likes,
            comments, likes on comments, personal pages, protected routes and
            permissions, two general API's and much more with the powerful of
            Firebase.
          </p>
        </div>
        <div className="flex gap-3 flex-wrap ml-10 mt-10 text-white">
          <span className="py-1 px-4 bg-[#ffffff2b] rounded-full">
            Firebase
          </span>
          <span className="py-1 px-4 bg-[#ffffff2b] rounded-full">Next.js</span>

          <span className="py-1 px-4 bg-[#ffffff2b] rounded-full">
            Tailwind CSS
          </span>
          <span className="py-1 px-4 bg-[#ffffff2b] rounded-full">
            Ant Design
          </span>
          <span className="py-1 px-4 bg-[#ffffff2b] rounded-full">
            State Management (recoil)
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

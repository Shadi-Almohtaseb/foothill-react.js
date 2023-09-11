import React from "react";

const ProjectCard = ({ item }) => {
  return (
    <div className="flex items-center flex-col bg-[#4990EB] p-4 rounded-lg mt-5 w-fit shadow-lg min-h-[16rem]">
      <div className="flex items-center 2xl:flex-row flex-col px-3">
        <img src={item.image} alt="" className="w-[25rem] h-fit rounded-lg" />
        <div className=" 2xl:w-full max-w-[25rem] mt-6 px-3">
          <div className="flex items-center justify-between gap-9 2xl:ml-10">
            <span className="text-[1.6rem] text-white">{item.title}</span>
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
          <div className="2xl:ml-10 mt-4 text-white">
            <p>{item.description}</p>
          </div>
        </div>
      </div>
      <div className="flex gap-3 flex-wrap mt-5 max-w-[25rem] 2xl:max-w-full text-white">
        {item.stack.map((item, index) => {
          return (
            <span key={index} className="py-1 px-4 bg-[#ffffff2b] rounded-full">
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectCard;

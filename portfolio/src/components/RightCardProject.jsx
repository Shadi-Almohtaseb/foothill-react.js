import React from "react";

const RightCardProject = ({ item }) => {
  return (
    <div className="flex items-center flex-col bg-[#aeaeae32] p-4 w-fit rounded-lg mt-5 shadow-lg">
      <div className="flex items-center 2xl:flex-row flex-col-reverse px-3">
        <div className="2xl:w-full max-w-[25rem] mt-6 px-3">
          <div className="flex items-center justify-between gap-9 2xl:ml-10">
            <span className="text-[1.6rem]">{item.title}</span>
            <div className="flex items-center justify-between gap-7">
              <img
                width="28"
                height="28"
                src="https://img.icons8.com/glyph-neue/64/000000/github.png"
                alt="github"
              />
              <img
                width="28"
                height="28"
                src="https://img.icons8.com/material-sharp/24/000000/visible.png"
                alt="visible"
              />
            </div>
          </div>
          <div className="mr-5 mt-4">
            <p>{item.description}</p>
          </div>
        </div>
        <img src={item.image} alt="" className="w-[25rem] h-fit rounded-lg " />
      </div>
      <div className="flex gap-3 flex-wrap mr-5 mt-5 max-w-[25rem] 2xl:max-w-full">
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

export default RightCardProject;

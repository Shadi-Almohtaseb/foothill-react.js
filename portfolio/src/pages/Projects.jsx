import React from "react";
import LeftBanner from "../components/LeftBanner";
import LeftCardProject from "../components/LeftCardProject";
import RightCardProject from "../components/RightCardProject";
import { projectDetails } from "../data/projetcs";

const Projects = () => {
  return (
    <div className="flex justify-between lg:flex-row flex-col lg:pr-10 mb-10">
      <LeftBanner />
      <div className="w-full xl:ml-5">
        <article className="mt-10 flex flex-wrap items-center justify-center gap-6">
          {projectDetails.map((item, index) => {
            if (index % 2 === 0) {
              return <LeftCardProject item={item} key={index} />;
            } else {
              return <RightCardProject item={item} key={index} />;
            }
          })}
        </article>
      </div>
    </div>
  );
};

export default Projects;

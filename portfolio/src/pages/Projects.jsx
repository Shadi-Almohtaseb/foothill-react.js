import React from "react";
import LeftBanner from "../components/LeftBanner";
import LeftCardProject from "../components/LeftCardProject";
import RightCardProject from "../components/RightCardProject";

const Projects = () => {
  return (
    <div className="flex justify-between lg:flex-row flex-col lg:pr-28">
      <LeftBanner />
      <div className="w-full ml-16">
        <article className="mt-12">
          <LeftCardProject />
          <RightCardProject />
          <LeftCardProject />
          <RightCardProject />
          <LeftCardProject />
        </article>
      </div>
    </div>
  );
};

export default Projects;

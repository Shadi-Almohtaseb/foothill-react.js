import React from "react";
import laptopImage from "../images/9215088-removebg-preview.png";
import LeftBanner from "../components/LeftBanner";

const Home = () => {
  return (
    <div className="flex justify-between lg:flex-row flex-col lg:pr-28">
      <LeftBanner />
      <div className="flex justify-center flex-col md:px-6 px-2 lg:w-[55%]">
        <img src={laptopImage} alt="laptop Image" className="w-[50rem]" />
        <p className="flex justify-center flex-col text-2xl leading-[41px] bg-[#f0f0f0] lg:px-8 px-3 py-6 rounded-lg shadow-lg">
          My passion lies in the art of crafting elegant solutions and
          fearlessly tackling complex challenges. It's this enthusiasm that
          fuels my drive to turn imaginative ideas into reality through the
          power of code. As a devoted technology enthusiast, I'm always eager
          for the next exhilarating challenge that awaits.
        </p>
      </div>
    </div>
  );
};

export default Home;

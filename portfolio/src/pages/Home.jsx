import React from "react";
import laptopImage from "../images/9215088-removebg-preview.png";
import LeftBanner from "../components/LeftBanner";

const Home = () => {
  return (
    <div className="flex justify-between">
      <LeftBanner />
      <div className="px-56">
        <img src={laptopImage} alt="laptop Image" className="w-[45rem]" />
        <p className="text-2xl leading-[38px]">
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

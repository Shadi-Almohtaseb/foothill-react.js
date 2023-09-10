import React from "react";
import profileImage from "../images/my-image.jpg";
import shapeImage from "../images/WhatsApp_Image_2023-09-07_at_3.50.57_PM-removebg-preview.png";

const LeftBanner = () => {
  return (
    <div className="lg:mx-5 mx-2 lg:pl-32">
      <article className="flex flex-col items-center justify-center relative">
        <img
          src={profileImage}
          alt="profile image"
          className="w-full h-full sm:max-w-[223px] max-w-[170px] rounded-full border-[#4990EB] border-4 mt-8"
        />
        <div className="relative">
          <img
            src={shapeImage}
            alt="shade image"
            className="md:min-w-[420px] max-w-[500px] w-full h-[40rem] -mt-11"
          />
          <div className="absolute top-0 text-white md:pl-10 pl-10 pt-20 flex gap-7 flex-col">
            <span className="lg:text-[2rem] text-[1.5rem] font-[400]">
              Hi There 👋
            </span>
            <span className="lg:text-[4rem] text-[3rem] font-[400]">
              I’m Shadi
            </span>
            <span className="lg:text-[2rem] text-[1.5rem] font-[400]">
              I'm a Software Engineer,
            </span>
            <div className="flex gap-7 lg:w-[2.5rem] w-[2rem]">
              <img
                width="64"
                height="50"
                src="https://img.icons8.com/ios-filled/50/FFFFFF/linkedin.png"
                alt="linkedin"
              />
              <img
                width="64"
                height="64"
                src="https://img.icons8.com/glyph-neue/64/FFFFFF/github.png"
                alt="github"
              />
              <img
                width="64"
                height="50"
                src="https://img.icons8.com/ios-filled/50/FFFFFF/twitterx--v2.png"
                alt="twitterx--v2"
              />
            </div>
            <span className="flex items-center gap-5 md:mt-5 mt-1">
              <img
                height="50"
                src="https://img.icons8.com/ios-filled/50/FFFFFF/filled-message.png"
                alt="filled-message"
                className="lg:w-[2.2rem] w-[1.6rem]"
              />
              <p className="sm:text-xl text-base">shadi876543211@gmail.com</p>
            </span>
            <span className="flex items-center gap-5 ">
              <img
                height="50"
                src="https://img.icons8.com/ios-filled/50/FFFFFF/phone.png"
                alt="phone"
                className="lg:w-[2.2rem] w-[1.6rem]"
              />
              <p className="sm:text-xl text-base">+970569758730</p>
            </span>
          </div>
        </div>
      </article>
    </div>
  );
};

export default LeftBanner;

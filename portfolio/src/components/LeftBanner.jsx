import React from "react";
import profileImage from "../images/my-image.jpg";
import shapeImage from "../images/WhatsApp_Image_2023-09-07_at_3.50.57_PM-removebg-preview.png";

const LeftBanner = () => {
  return (
    <div className="flex mx-10">
      <article className="flex flex-col items-center justify-center relative">
        <img
          src={profileImage}
          alt="profile image"
          className="w-[223px] h-[223px] rounded-full border-[#4990EB] border-4 mt-12"
        />
        <div className="relative">
          <img
            src={shapeImage}
            alt="shade image"
            className="max-w-[30rem] -mt-11"
          />
          <div className="absolute top-0 text-white pl-10 pt-12 flex gap-7 flex-col">
            <span className="text-3xl font-[400]">Hi There 👋</span>
            <span className="text-[4rem] font-[400]">I’m Shadi</span>
            <span className="text-[2rem] font-[400]">
              I'm a Software Engineer,
            </span>
            <div className="flex gap-7 w-[3rem]">
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
            <span className="flex items-center gap-5 mt-8">
              <img
                width="35"
                height="50"
                src="https://img.icons8.com/ios-filled/50/FFFFFF/filled-message.png"
                alt="filled-message"
              />
              <p className="text-xl">shadi876543211@gmail.com</p>
            </span>
            <span className="flex items-center gap-5 ">
              <img
                width="35"
                height="50"
                src="https://img.icons8.com/ios-filled/50/FFFFFF/phone.png"
                alt="phone"
              />
              <p className="text-xl">+970569758730</p>
            </span>
          </div>
        </div>
      </article>
    </div>
  );
};

export default LeftBanner;

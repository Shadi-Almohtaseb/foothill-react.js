import React from "react";
import LeftBanner from "../components/LeftBanner";
import Marquee from "react-fast-marquee";
import Logo1 from "../images/Logos/ant-design-logo.png";
import Logo2 from "../images/Logos/CSS-logo-removebg-preview.png";
import Logo3 from "../images/Logos/express-logo-removebg-preview.png";
import Logo4 from "../images/Logos/firebase-logo-removebg-preview.png";
import Logo5 from "../images/Logos/html.png";
import Logo6 from "../images/Logos/javascript-removebg-preview.png";
import Logo7 from "../images/Logos/MongoDB_Logo.png";
import Logo8 from "../images/Logos/mui-logo.png";
import Logo9 from "../images/Logos/next-js.png";
import Logo10 from "../images/Logos/react-logo-png.png";
import Logo11 from "../images/Logos/node-logo-removebg-preview.png";
import Logo12 from "../images/Logos/redux-logo.png";
import Logo13 from "../images/Logos/Sql_data_base_with_logo.png";
import Logo14 from "../images/Logos/svg1.jpg";
import Logo15 from "../images/Logos/tailwind-css-logo-removebg-preview.png";

const Skills = () => {
  return (
    <div className="flex items-center justify-between lg:flex-row flex-col">
      <LeftBanner />
      <div className="flex gap-8 flex-col mt-16 lg:mr-[4rem] w-full  overflow-hidden rounded-lg">
        <Marquee
          autoFill
          className="bg-[#ebebeb] py-6 rounded-lg mx-5 mr-10 h-[14rem]"
        >
          <div className="flex justify-between gap-52 items-center w-full">
            <div className="flex-shrink-0">
              <img
                src={Logo1}
                alt=""
                style={{ maxWidth: "110px", objectFit: "contain" }}
              />
            </div>
            <div className="flex-shrink-0">
              <img
                src={Logo2}
                style={{ maxWidth: "100px", objectFit: "contain" }}
                alt=""
              />
            </div>
            <div className="flex-shrink-0">
              <img
                src={Logo3}
                style={{ maxWidth: "230px", objectFit: "contain" }}
                alt=""
              />
            </div>
            <div className="flex-shrink-0">
              <img
                src={Logo4}
                style={{ maxWidth: "150px", objectFit: "contain" }}
                alt=""
              />
            </div>
            <div className="flex-shrink-0">
              <img
                src={Logo5}
                style={{
                  maxWidth: "190px",
                  marginRight: "130px",
                  objectFit: "contain",
                }}
                alt=""
              />
            </div>
          </div>
        </Marquee>

        <Marquee
          autoFill
          className="bg-[#ebebeb] py-6 rounded-lg mx-5 mr-10 h-[14rem] overflow-hidden"
        >
          <div className="flex justify-between gap-52 items-center w-full">
            <div>
              <img
                src={Logo6}
                alt=""
                style={{ width: "110px", objectFit: "contain" }}
              />
            </div>
            <div>
              <img
                src={Logo7}
                style={{ width: "200px", objectFit: "contain" }}
                alt=""
              />
            </div>
            <div>
              <img
                src={Logo8}
                style={{ width: "110px", objectFit: "contain" }}
                alt=""
              />
            </div>
            <div>
              <img
                src={Logo9}
                style={{ width: "150px", objectFit: "contain" }}
                alt=""
              />
            </div>
            <div>
              <img
                src={Logo10}
                style={{
                  width: "120px",
                  marginRight: "130px",
                  objectFit: "contain",
                }}
                alt=""
              />
            </div>
          </div>
        </Marquee>
        <Marquee
          autoFill
          className="bg-[#ebebeb] py-6 rounded-lg mx-5 mr-10 h-[14rem] overflow-hidden"
        >
          <div className="flex justify-between gap-52 items-center w-full">
            <div>
              <img
                src={Logo11}
                alt=""
                style={{ width: "200px", objectFit: "contain" }}
              />
            </div>
            <div>
              <img
                src={Logo12}
                style={{ width: "110px", objectFit: "contain" }}
                alt=""
              />
            </div>
            <div>
              <img
                src={Logo13}
                style={{ width: "150px", objectFit: "contain" }}
                alt=""
              />
            </div>
            <div>
              <img
                src={Logo14}
                style={{ width: "190px", objectFit: "contain" }}
                alt=""
              />
            </div>
            <div>
              <img
                src={Logo15}
                style={{
                  width: "300px",
                  marginRight: "120px",
                  objectFit: "contain",
                }}
                alt=""
              />
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;

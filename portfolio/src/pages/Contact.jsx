import React from "react";
import LeftBanner from "../components/LeftBanner";

const Contact = () => {
  return (
    <div className="flex justify-between lg:flex-row flex-col lg:pr-28 mb-12">
      <LeftBanner />
      <div className="w-full flex justify-center mt-36">
        <div className="flex items-center max-w-[40rem] w-full flex-col gap-8 mx-2">
          <input
            type="text"
            id="first_name"
            className="bg-gray-100 border w-full max-w-[40rem] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block outline-none p-2.5 "
            placeholder="Full Name..."
            required
          />
          <input
            type="text"
            id="first_name"
            className="bg-gray-100 border w-full max-w-[40rem] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block outline-none p-2.5 "
            placeholder="Email..."
            required
          />
          <textarea
            cols="50"
            rows="19"
            placeholder="Message..."
            className="bg-gray-100 border-gray-300 border text-gray-900 text-sm r focus:ring-blue-500 focus:border-blue-500 outline-none rounded-lg w-full max-w-[40rem] p-3"
          ></textarea>
          <button className="px-10 py-2 ml-2 bg-[#4990EB] self-start text-white rounded-md font-normal shadow-lg">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

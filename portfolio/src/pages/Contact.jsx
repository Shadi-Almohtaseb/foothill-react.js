import React from "react";
import LeftBanner from "../components/LeftBanner";

const Contact = () => {
  return (
    <div className="flex justify-between lg:flex-row flex-col lg:pr-28">
      <LeftBanner />
      <div className="w-full mt-36">
        <div className="flex items-center justify-center flex-col gap-8">
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
            className=" border-gray-300 bg-gray-100 border rounded-lg w-full max-w-[40rem] p-3"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Contact;

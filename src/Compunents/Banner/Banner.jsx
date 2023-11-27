import React from "react";

const Banner = () => {
  return (
    <div className="flex justify-between font-Barlow min-h-screen">
      <div className="w-1/3 bg-black">
        <div className=" text-white relative lg:w-[500px]">
          <div className="container  py-10 text-center absolute top-[100px] left-20 bg-black ">
            <h2 className="lg:text-6xl font-bold mb-4">
              Best Land Surveying & <br /> Digital Mapping Service
            </h2>
            <button className="bg-[#ff6900] text-black p-1 lg:py-2 lg:px-6 rounded-full  focus:outline-none mr-4">
              CONTACT US
            </button>
            <button className="bg-white text-black py-2 px-6 rounded-full hover:bg-gray-200 focus:outline-none">
              WATCH INTRO
            </button>
          </div>
        </div>
      </div>
      <div
        className="hero min-h-screen w-3/4 "
        style={{
          backgroundImage:
            "url(https://i.ibb.co/wSxCy9d/surveyor-equipment-gps-system-or-theodolite-outdoors-at-highway-construction-site-e1648614638795.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 "></div>
        <div className="hero-content text-center ">
          
          <div className=" absolute -bottom-40">
            <img src="https://i.ibb.co/42yrrpP/teamm-SM48-MB9.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

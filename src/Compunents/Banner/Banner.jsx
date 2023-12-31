import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="flex justify-between font-Barlow min-h-screen">
      <div className="w-1/3 bg-[#ff6900]">
        <div className=" text-white relative lg:w-[500px]">
          <div className="container  py-10 text-center absolute lg:top-[100px] lg:left-20  bg-black ">
            <h2 className="lg:text-6xl font-bold mb-4">
              Best Land Surveying & <br /> Digital Mapping Service
            </h2>
           <Link to={"/contactus"}>
           <button className="bg-[#ff6900] text-black p-1 lg:py-2 lg:px-6 rounded-full  focus:outline-none lg:mr-4 mb-2">
              CONTACT US
            </button>
           </Link>
           <Link to={"/aboutus"}>
           <button className="bg-white text-black p-1 lg:py-2 lg:px-6 rounded-full hover:bg-gray-200 focus:outline-none">
              ABOUT US
            </button>
           </Link>
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
          
          <div className=" lg:absolute lg:-bottom-20 lg:right-10">
            <img src="https://i.ibb.co/42yrrpP/teamm-SM48-MB9.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

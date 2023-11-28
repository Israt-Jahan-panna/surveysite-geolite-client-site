import React from "react";

const About = () => {
  return (
    <div className="max-w-[1600px]  lg:px-10   mx-5 px- lg:my-10 flex flex-col  lg:flex-row font-Barlow my-4">
      {/* image section */}
      <div className="container lg:mx-7 relative ">
        <div >
            <img className="lg:mt-10 lg:h-96 absolute lg:bottom-24  bg-white lg:p-4 lg:-left-4 h-60 mt-6 bottom-8"
          src="https://i.ibb.co/mTKFfKD/contractor-land-surveying-the-backyard-e1648614223933-pmm0wt72xbv7tjb1xstx9nck7n2ftkohgjjha55m9s.jpg"
          alt=""
        /></div>
        <div>
        <img className=" lg:h-screen lg:ml-14 lg:mt-10"
          src="
            https://i.ibb.co/SRQSPLg/industrial-engineering-with-theodolite-gps-total-PGMEPKH-pmm24zlzep2uswn7x6zgb47gxhv15xblk7wmt9a58g.jpg"
          alt=""
        />
        </div>
      </div>
      <div className="container items-center lg:pt-9">
        <h1 className="text-xl font-semibold text-[#ff6900] mb-6 mt-6">ABOUT GEOLITE</h1>
        <p className="text-black font-extrabold text-3xl mb-6">We Provide Best Land Survey & <br /> Digital Mapping Services</p>
        <p className="text-xl font-bold mb-8">"Geolite: Premier land survey & digital mapping. Quality service, affordable prices, led by CEO Zander Jones for excellence."</p>
        {/* best and affort section */}
        <div className="flex items-center gap-11">
          <div>
            <h3 className="text-xl font-bold"> 
            <i className="fa-solid fa-circle-check" style={{ color: '#ecbd3c' }} ></i>  Best Quality Service</h3>
            <p className="text-lg  ">Top-notch land survey and mapping with unparalleled quality.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold"> <i className="fa-solid fa-circle-check" style={{ color: '#ecbd3c' }} ></i> Affordable Pricing</h3>
            <p className="text-lg">Exceptional service at affordable prices, ensuring value for every client.</p>
          </div>
        </div>
        <div>
            
        </div>
       <div className="mt-10 flex gap-11">
        <div><h3 className="h-32 w-1 bg-[#ff6900]"></h3></div>
      <div>
      <p className="text-lg">Driving excellence in surveying and <br />mapping solutions.</p>
        <h1 className="text-lg font-bold">Zander Jones – CEO Geolite</h1>
      </div>
      <div>
        <h3 className="text-[#ff6900] text-9xl"><i className="fa-solid fa-quote-left"style={{ color: '#ecbd3c' }} ></i></h3>
      </div>
       </div>
      </div>
    </div>
  );
};

export default About;

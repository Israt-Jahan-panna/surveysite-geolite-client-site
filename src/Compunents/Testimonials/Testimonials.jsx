import React from "react";

const Testimonials = () => {
  const testimonialsData = [
    {
      name: "Callie John",
      position: "CEO, VScret",
      testimonial:
        "Geolite Land Survey and Digital Mapping exceeded our expectations. Their precision and professionalism have been instrumental in our projects. Highly recommended.",
    },
    {
      name: "Maxine Soto",
      position: "Businessman",
      testimonial:
        "In the realm of land surveying, Geolite stands out. Their attention to detail and innovative solutions have significantly contributed to the success of our ventures.",
    },
    {
      name: "Lincoln Cash",
      position: "Entrepreneur",
      testimonial:
        "Geolite is our trusted partner for all things digital mapping. Their expertise and commitment have added tremendous value to our projects. Exceptional service!",
    },
  ];
  return (
    <div className="max-w-[1600px] mx-auto font-Barlow mt-4 lg:px-12 px-4 bg-black flex lg:flex-row flex-col lg:h-screen items-center lg:gap-10 mb-10">
      <div className="text-white  lg:pr-8">
        <h1 className="text-[#FFB633] lg:text-xl font-semibold lg:mb-6">
          TESTIMONIALS
        </h1>
        <h2 className="lg:text-3xl font-bold lg:mb-4">
          We Are Trusted Over 16+ <br /> Countries Worldwide
        </h2>
        <p className=" font-semibold text-gray-400">
          "Discover the global impact of our services as we proudly serve and
          earn the trust of clients across 16+ countries worldwide. Our
          commitment to excellence and unwavering dedication has made us a
          trusted partner in delivering top-tier solutions in the field of land
          surveying and digital mapping. Explore the testimonials from our
          satisfied clients, reflecting the reliability and quality of our
          services."
        </p>
      </div>
      <div className=" bg-[#FFB633] ">
        <div className="carousel w-full h-80 ">
          <div id="slide1" className="carousel-item relative w-full ">
            <div>
            <h3 className="flex mt-14 w-3/4 lg:pl-20">
              "Geolite has revolutionized our approach to land surveying and
              digital mapping. Their precision and attention to detail have been
              instrumental in our projects. I highly recommend their services."
            </h3>
            
            <div className=" flex mt-16  lg:pl-16">
              <div className="avatar ">
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-4">
                  <img src="https://i.ibb.co/b73T2YH/testimonial-Q8-JDNBT.png" />
                </div>
                <h3>Callie John, <br /> CEO at VScret</h3>
                
              </div>
              
            </div>
            <div className="relative left-80 -top-24">
                <h3 className="text-[#ff6900] text-9xl"><i className="fa-solid fa-quote-left h-12"style={{ color: 'black' }} ></i>
                </h3>
            </div>
            </div>
            
            <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>

          </div>
          <div id="slide2" className="carousel-item relative w-full">
          <div>
            <h3 className="flex mt-14 w-3/4 lg:pl-20">"Geolite is a game-changer in the industry. Their expertise in land surveying and digital mapping is unmatched. The accuracy of their data have been pivotal for our business. Geolite is an invaluable partner for any venture."
            </h3>
            
            <div className=" flex mt-16  lg:pl-16">
              <div className="avatar ">
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-4">
                  <img src="https://i.ibb.co/HPFBkhm/testimonial-YV9-ABZR.png" />
                </div>
                <h3>Maxine Soto, <br />  Businessman</h3>
                
              </div>
              
            </div>
            <div className="relative left-80 -top-24">
                <h3 className="text-[#ff6900] text-9xl"><i className="fa-solid fa-quote-left h-12"style={{ color: 'black' }} ></i>
                </h3>
            </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
          <div>
            <h3 className="flex mt-14 w-3/4 lg:pl-20">"Choosing Geolite for our land surveying and digital mapping needs was a strategic decision. Their innovative solutions have consistently exceeded our expectations. Geolite's services have been crucial in providing us  a competitive edge in the market."
            </h3>
            
            <div className=" flex mt-14  lg:pl-20">
              <div className="avatar ">
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-4">
                  <img src="https://i.ibb.co/wSjdDk2/testimonial-A8-E2-W8-S.jpg" />
                </div>
                <h3>Callie John, <br /> CEO at VScret</h3>
                
              </div>
              
            </div>
            <div className="relative left-80 -top-24">
                <h3 className="text-[#ff6900] text-9xl"><i className="fa-solid fa-quote-left h-12"style={{ color: 'black' }} ></i>
                </h3>
            </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

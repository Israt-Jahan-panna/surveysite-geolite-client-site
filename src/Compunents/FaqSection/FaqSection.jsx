import React from "react";

const FaqSection = () => {
  return (
    <div className="mx-auto my-8 sm:my-12 lg:px-14 max-w-[1600px] flex flex-col lg:flex-row items-center gap-14 px-4">
        <div className="container  font-Barlow ">
      <h1 className="text-xl font-semibold text-[#ff6900] mb-6 mt-6">FAQ</h1>
      <h2 className="text-2xl sm:text-3xl font-bold sm:mb-8">
        General Question
      </h2>
      <p className="mb-9">
        Welcome to our website! Discover more about our land surveying and
        digital mapping services before exploring our frequently asked questions
        below.
      </p>
      <div className="join join-vertical w-full">
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" checked="checked" />
          <div className="collapse-title text-xl font-medium">
            What services do you offer?
          </div>
          <div className="collapse-content">
            <p>
              We provide comprehensive land surveying and digital mapping
              services, including boundary surveys, topographic mapping, and GIS
              data analysis.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            How accurate are your land surveying measurements?
          </div>
          <div className="collapse-content">
            <p>
              Our state-of-the-art equipment ensures precise measurements,
              meeting industry standards for accuracy in all surveying projects.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            What types of properties do you survey?
          </div>
          <div className="collapse-content">
            <p>
              We survey a diverse range of properties, including residential,
              commercial, agricultural, and industrial sites.
            </p>
          </div>
        </div>
      </div>

      </div>
      <div className="mt-8">
        <img src="https://i.ibb.co/Kr3BYfm/two-professional-road-construction-workers-e1648614767155.jpg" alt="" />
      </div>
    </div>
  );
};

export default FaqSection;

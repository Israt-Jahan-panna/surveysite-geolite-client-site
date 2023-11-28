import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";

const LatestProjects = () => {
    const projectData = [
        {
          title: 'Survey Construction',
          details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper, felis at cursus...',
          image: 'https://i.ibb.co/zRLjvpn/close-up-details-of-working-surveying-engineer-on-surveyor-work-at-construction-site-e1648614321201.jpg',
        },
        {
          title: 'Land Survey',
          details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper, felis at cursus...',
          image: 'https://i.ibb.co/r3R7Fpt/survey-engineers-working-at-construction-land-site-topographic-work-concept-focus-on-woman-face-e164.jpg',
        },
        {
          title: 'Road Construction',
          details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper, felis at cursus...',
        
          image: 'https://i.ibb.co/zJ6kD5s/geodesy-details-construction-site-workers-building-highway-and-roads-surveying-engineer-details-e164.jpg',
        },
        
        {
          title: 'Digital Mapping',
          details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper, felis at cursus...',
          image: 'https://i.ibb.co/YTMPj7J/cropped-image-of-man-with-pens-discussing-over-street-map-e1648614755778.jpg',
        },
        {
          title: 'Topographical',
          details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper, felis at cursus...',
          image: ' https://i.ibb.co/wSxCy9d/surveyor-equipment-gps-system-or-theodolite-outdoors-at-highway-construction-site-e1648614638795.jpg',
        },
        {
          title: 'Survey Building',
          details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper, felis at cursus...',
          image: 'https://i.ibb.co/kQ9LNgK/engineer-surveyor-working-with-theodolite-at-construction-site-1-e1648614580516.jpg',
        },
      ];
  return (
    <div className="max-w-[1600px] mx-auto font-Barlow mt-4">
      <div className="text-center pt-6">
      <h3 className="text-2xl  text-[#ff6900] mb-2">OUR PROJECTS</h3>
      <p className="font-bold text-2xl">Let’s See Our Latest Project</p>
      <p className="text-lg mt-2">
        "Explore the culmination of our expertise and innovation in land <br />
        surveying and digital mapping through our latest projects. <br /> Witness
        precision, accuracy, and excellence in every detail."
      </p>
      </div>
      <div>
      <div className="container mx-auto my-8 px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
      </div>
    </div>
  );
};

export default LatestProjects;

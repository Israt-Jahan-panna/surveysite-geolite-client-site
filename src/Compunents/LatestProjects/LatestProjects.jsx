import React, { useEffect, useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";

const LatestProjects = () => {
  const [surveys, setSurveys] = useState([]);

  useEffect(() => {
    const fetchSurveys = async () => {
      try {
        const response = await fetch("https://geolite-server-site.vercel.app/survey");
        const data = await response.json();
        
        // Sort surveys by timestamp in descending order
        const sortedSurveys = data.sort(
          (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
        );

        // Select the top 6 surveys
        const top6Surveys = sortedSurveys.slice(0, 6);

        setSurveys(top6Surveys);
      } catch (error) {
        console.error("Error fetching surveys:", error);
      }
    };

    fetchSurveys();
  }, []);
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
      {surveys.map((survey) => (
        <ProjectCard key={survey.id} survey={survey}></ProjectCard>
      ))}
      </div>
    </div>
      </div>
    </div>
  );
};

export default LatestProjects;

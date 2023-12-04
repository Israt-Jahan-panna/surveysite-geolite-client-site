import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import SurveysCard from './SurveysCard';

const Surveys = () => {
    const [surveys, setSurveys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4200/survey")
      .then((res) => res.json())
      .then((data) => setSurveys(data));
  });
  // console.log(surveys);
    return (

        <div>
           <div className="mx-4 lg:mx-10 py-5 lg:px-0 max-w-[1600px] ">
      <Helmet>
        <title>GEOLITE | SURVEYS </title>
        
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {surveys.map((survey) => (
        <SurveysCard key={survey.id} survey={survey}></SurveysCard>
      ))}
      </div>
    </div> 
        </div>
    );
};

export default Surveys;
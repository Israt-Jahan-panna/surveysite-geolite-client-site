import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Details from './Details';

const SurveyDetails = () => {
    const { _id } = useParams(); // Make sure to use curly braces around _id
    const [survey, setSurveys] = useState([]);

    useEffect(() => {
        fetch(`https://geolite-server-site.vercel.app/survey/${_id}`)
            .then(res => res.json())
            .then(data => {
                setSurveys(data);
            })
    }, [_id]);
console.log(survey)
    return (
        <div>
        {survey && <Details key={survey._id} survey={survey}></Details>}
    </div>
    );
};

export default SurveyDetails;
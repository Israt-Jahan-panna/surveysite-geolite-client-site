import React from "react";
import { Link } from "react-router-dom";

const SurveysCard = ({ survey }) => {
  const {
    _id,
    title,
    shortdescription,
    category,
    imageUrl,
    timestamp,
    voting,
    likeCount,
    dislikeCount,
  } = survey || {};
  console.log(survey);
  return (
    <div className="flex flex-col bg-white rounded-md overflow-hidden shadow-md font-Barlo ">
      <img src={imageUrl} alt={title} className="object-cover h-48 w-full" />
      <div className="p-4">
        <h3>{category}</h3>
        <h3 className="text-xl font-semibold mb-2  h-12">{title}</h3>
        <p className="text-gray-700">{shortdescription}</p>
        <div className="flex items-center justify-between relative bottom-0">
          <Link to={`/survey/${_id}`}>
          <button className="mt-4 bg-[#ff6900] text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none">
            View Details
          </button>
          </Link>
          
          <h3> Vote {voting}</h3>
          <h3>
            <i
              className="fa-solid fa-thumbs-up mr-1"
              style={{ color: " blue" }}
            ></i>
            {likeCount}
          </h3>
          <h3>
            {" "}
            <i
              className="fa-solid fa-thumbs-down mr-1"
              style={{ color: " red" }}
            ></i>
            {dislikeCount}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SurveysCard;

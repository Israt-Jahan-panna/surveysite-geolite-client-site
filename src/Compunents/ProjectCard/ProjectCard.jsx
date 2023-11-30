import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ survey }) => {
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
    const cardStyle = {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };
    return (
        <div className="relative bg-cover bg-center h-96" style={cardStyle}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <h3 className="text-xl font-semibold text-white mb-2">{category}</h3>
          <p className="text-gray-300">{shortdescription}</p>
          <div>
          <Link to={`/survey/${_id}`}>
          <button className="text-[#ff6900]" > 
            View Details <i className="fa-solid fa-arrow-right ml-2" style={{color: '#ff6900' }}></i>
          </button>
          </Link>
          </div>
        </div>
      </div>
    );
};

export default ProjectCard;
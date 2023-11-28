import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ image, title, details }) => {
    const cardStyle = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };
    return (
        <div className="relative bg-cover bg-center h-96" style={cardStyle}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-300">{details}</p>
          <div>
          <Link to={"/surveydetails"}>
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
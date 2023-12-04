// src/components/PricingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const PricingPage = () => {
  const handleProUser = () => {
    
  };
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Geolite Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 p-8">
        
        {/* Pricing Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Pro Plan</h3>
          <p className="text-gray-600 mb-4">Great for businesses</p>
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg font-bold">$19.99/month</span>
            <Link to={"/prouser"}>
            <button onClick={handleProUser} className="bg-blue-500 text-white px-4 py-2 rounded">
              Select 
            </button>
            </Link>
          </div>
          <ul className="text-gray-600">
            <li>50,000 requests/month</li>
            <li>Advanced features</li>
            {/* Add more features */}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default PricingPage;

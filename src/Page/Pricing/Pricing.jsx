// src/components/PricingPage.js
import React from 'react';

const PricingPage = () => {
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Geolite Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Pricing Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Basic Plan</h3>
          <p className="text-gray-600 mb-4">Perfect for small projects</p>
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg font-bold">$9.99/month</span>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Select
            </button>
          </div>
          <ul className="text-gray-600">
            <li>10,000 requests/month</li>
            <li>Basic features</li>
            {/* Add more features */}
          </ul>
        </div>

        {/* Pricing Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Pro Plan</h3>
          <p className="text-gray-600 mb-4">Great for businesses</p>
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg font-bold">$19.99/month</span>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Select
            </button>
          </div>
          <ul className="text-gray-600">
            <li>50,000 requests/month</li>
            <li>Advanced features</li>
            {/* Add more features */}
          </ul>
        </div>

        {/* Pricing Card 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Enterprise Plan</h3>
          <p className="text-gray-600 mb-4">Customized solutions</p>
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg font-bold">Contact Us</span>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Contact
            </button>
          </div>
          <ul className="text-gray-600">
            <li>Custom requests/month</li>
            <li>Full access to all features</li>
            {/* Add more features */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;

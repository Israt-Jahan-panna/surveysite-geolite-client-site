import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div>
      <Helmet>
        <title>GEOLITE | About Us</title>
        {/* Add any other meta tags you need */}
      </Helmet>

      <div className="mx-auto container p-8 flex flex-col gap-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4 text-center">About Geolite</h2>

          <p className="mb-4">
            Welcome to Geolite, your go-to source for all things related to
            geolocation and mapping.
          </p>

          <p className="mb-4">
            At Geolite, we are passionate about providing accurate and reliable
            geospatial information to help you navigate and understand the world
            around you.
          </p>

          <p className="mb-4">
            Our mission is to make geolocation technology accessible to
            everyone, from casual users to businesses, by offering user-friendly
            tools and resources.
          </p>
        </div>
            <hr />
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">Our Team</h3>

          <p className="mb-4">
            Geolite was founded by a team of dedicated professionals with
            expertise in geospatial technology, software development, and user
            experience design. Together, we aim to empower individuals and
            businesses with the insights they need for better decision-making.
          </p>
        </div>
            <hr />
        <div className="text-center">
        <Link to={"/contactus"}>  <button className="text-2xl font-bold mb-2">Contact Us</button></Link>

          <p className="mb-4">
            Have questions or feedback? We'd love to hear from you! Contact our
            team at <a href="mailto:info@geolite.com">info@geolite.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

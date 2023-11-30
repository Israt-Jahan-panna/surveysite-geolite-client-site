import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
        <footer
      className="relative bg-cover bg-center lg:h-[500px] "
      style={{
        backgroundImage:
          'url("https://i.ibb.co/kS1WdDw/engineer-man-doing-topographic-measures-on-land-for-construction-work-during-coronavirus-outbreak-e1.jpg")',
      }}
    >
        
      <div className="absolute inset-0 bg-black opacity-75"> </div>
     
      <div className="container mx-auto lg:px-14 lg:py-20   p-5 relative z-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-white">
          <div className="mb-8">
            <h4 className="text-2xl font-bold mb-4">Quick Links</h4>
            <ul>
              <li>Home</li>
              <li><Link to={"/aboutus"}>About Us</Link></li>
              <li>Services</li>
              <li><Link to={"/contactus"}>Contact Us</Link></li>
            </ul>
          </div>
          <div className="mb-8">
            <h4 className="text-2xl font-bold mb-4">Other Pages</h4>
            <ul>
              <li>FAQ</li>
              <li>Blog</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className="mb-8">
            <h4 className="text-2xl font-bold mb-4">Contact Info</h4>
            <p>Jl. Raya Puputan No 142, Denpasar</p>
            <p>(+62) 81 115 3568</p>
            <p>support@domain.com</p>
            <p>Mon - Fri : 9:00 am - 5:00 pm</p>
          </div>
          <div className="mb-8">
            <h4 className="text-2xl font-bold mb-4">Make an Appointment</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt labor
            </p>
          </div>
          <div className="mb-8">
            <h4 className="text-2xl font-bold mb-4">Call Us Today</h4>
            <p>(+62) 81 115 3568</p>
          </div>
        </div>
        <div className="flex items-center justify-center mt-8 mb-2">
          <div className="flex space-x-4">
          <i className="fa-brands fa-facebook" style={{ color: '#ff6900' }}></i>
          <i className="fa-brands fa-twitter" style={{ color: '#ff6900' }}></i>
          <i className="fa-brands fa-linkedin" style={{ color: '#ff6900' }}></i>
          <i className="fa-brands fa-google" style={{ color: '#ff6900' }}></i>
          
            <i className="jki-instagram-1-light"></i>
            <i className="jki-linkedin-light"></i>
          </div>
        </div>
        <hr />
        <div className="text-center mt-2 text-white">
          <p>Copyright © 2023 Geolite</p>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;

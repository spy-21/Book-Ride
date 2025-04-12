import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen px-6 md:px-16 bg-slate-800">
      {/* Text Content */}
      <div className="text-center md:text-left md:w-1/2 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Welcome to Our Website
        </h1>
        <p className="text-lg text-gray-600">
          We're glad to have you here. Explore our features and services
          designed to help you succeed.
        </p>
        <Link to="/booking">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition duration-300">
            Book ride
          </button>
        </Link>
      </div>

      {/* Image */}
      <div className="md:w-1/2 mb-10 md:mb-0">
        <img
          src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/11/holding-smartphone.jpg"
          alt="Hero"
          className="w-full h-auto rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;

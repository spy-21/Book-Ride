import React from "react";

const About = () => {
  return (
    <div className="about p-8 bg-white rounded-2xl shadow-md max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
      <img
        src="https://startuptrak.com/wp-content/uploads/2021/07/Rapido-Ride-1024x683.jpg"
        className="w-full md:w-1/2 rounded-2xl object-cover"
      />
      <div className="text-gray-800">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">About Us</h1>
        <p className="mb-3 text-lg">
          We are a forward-thinking company committed to delivering top-tier
          services and solutions tailored to your unique needs.
        </p>
        <p className="mb-3 text-lg">
          India’s Beloved Bike Taxi Service We are not an option, we are a
          choice We're #1 choice of 10 Million people because we're the solution
          of India's intra-city commuting problems. With assured safety, we also
          provide economically priced rides.
        </p>
        <p className="text-lg">
          What makes us different? Our bike taxis can dodge the traffic during
          peak hours and get you to the destination in a jiffy! So when you
          think travel, think Rapido.
        </p>
      </div>
    </div>
  );
};

export default About;

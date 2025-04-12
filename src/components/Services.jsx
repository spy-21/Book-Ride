import React from "react";

const Services = () => {
  const services = [
    {
      name: "Bike",
      image:
        "https://images.unsplash.com/photo-1595691403533-7f4a52a5b189?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VwZXJiaWtlfGVufDB8fDB8fHww",
    },
    {
      name: "Auto",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/8/334360058/HE/NX/XP/13536619/bajaj-re-compact-diesel-auto-rickshaw.jpg",
    },
    {
      name: "Cab",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf3z7OWqziaGuGiWhvwKc4Ur7442iMZVNuRw&s",
    },
  ];

  return (
    <div className="services p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-white-600 mb-8">
        Our Services
      </h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition"
          >
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h2 className="text-xl font-semibold text-gray-800">
                {service.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

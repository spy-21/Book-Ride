import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Booking() {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const navigate = useNavigate();

  const handleBookRide = () => {
    console.log("Navigating to payment...");
    navigate("/payment");
  };

  const handleMapSelect = () => {
    navigate("/booking");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-2">
      <div className="bg-white bg-opacity-90 backdrop-blur-md p-6 rounded-xl shadow-md w-full max-w-md flex flex-col min-h-[200px]">
        <div className="flex-grow">
          <h1 className="text-2xl font-bold mb-4 text-center">
            Book Your Ride
          </h1>

          <input
            type="text"
            placeholder="Pickup Location"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            className="w-full mb-3 p-2 rounded border focus:outline-none focus:ring focus:ring-blue-400"
          />
          <input
            type="text"
            placeholder="Drop Location"
            value={drop}
            onChange={(e) => setDrop(e.target.value)}
            className="w-full mb-4 p-2 rounded border focus:outline-none focus:ring focus:ring-blue-400"
          />

          <div className="text-center mb-6">
            <button
              onClick={handleMapSelect}
              className="text-blue-600 underline hover:text-blue-800"
            >
              Or Select on Map
            </button>
          </div>
        </div>

        <button
          type="button"
          onClick={handleBookRide}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Book Ride
        </button>
      </div>
    </div>
  );
}

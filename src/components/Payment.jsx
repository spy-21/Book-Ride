import React, { useState } from "react";

const UpiPayment = () => {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [vehicleType, setVehicleType] = useState("bike");
  const [amount, setAmount] = useState(0);
  const [upiId, setUpiId] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  // Mock function to calculate travel distance (in km)
  const calculateDistance = () => {
    // Ideally, use an API to calculate the actual distance between pickup and drop locations
    return 10; // Mock distance value (10 km for this example)
  };

  const calculateAmount = () => {
    const distance = calculateDistance(); // Get the distance (in km)
    let rate;

    // Set rate based on vehicle type
    switch (vehicleType) {
      case "bike":
        rate = 10; // ₹10 per km
        break;
      case "auto":
        rate = 15; // ₹15 per km
        break;
      case "car":
        rate = 20; // ₹20 per km
        break;
      default:
        rate = 10; // Default to bike rate
    }

    const totalAmount = distance * rate; // Calculate the total amount
    setAmount(totalAmount); // Update the amount
  };

  // Submit payment
  const handleUpiSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      alert("Payment Successful!"); // Simulate successful payment
    }, 3000);
  };

  // Update the amount when the vehicle type changes
  const handleVehicleChange = (e) => {
    setVehicleType(e.target.value);
    calculateAmount(); // Recalculate amount when vehicle type changes
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Make UPI Payment
        </h2>

        {/* Pickup and Drop Location Inputs */}
        <div className="space-y-4">
          <div>
            <label htmlFor="pickup" className="block font-medium mb-1">
              Pickup Location:
            </label>
            <input
              type="text"
              id="pickup"
              placeholder="Enter your pickup location"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              required
              className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>

          <div>
            <label htmlFor="drop" className="block font-medium mb-1">
              Drop Location:
            </label>
            <input
              type="text"
              id="drop"
              placeholder="Enter your drop location"
              value={drop}
              onChange={(e) => setDrop(e.target.value)}
              required
              className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>

          {/* Vehicle Type Selection */}
          <div>
            <label htmlFor="vehicleType" className="block font-medium mb-1">
              Select Vehicle Type:
            </label>
            <select
              id="vehicleType"
              value={vehicleType}
              onChange={handleVehicleChange}
              className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-blue-400"
            >
              <option value="bike">Bike</option>
              <option value="auto">Auto</option>
              <option value="car">Car</option>
            </select>
          </div>

          {/* Display Amount */}
          <div>
            <label htmlFor="amount" className="block font-medium mb-1">
              Amount to Pay:
            </label>
            <input
              type="text"
              id="amount"
              value={`₹${amount}`}
              readOnly
              className="w-full p-3 border rounded bg-gray-200 cursor-not-allowed"
            />
          </div>

          {/* UPI ID Input */}
          <div>
            <label htmlFor="upiId" className="block font-medium mb-1">
              Enter UPI ID:
            </label>
            <input
              type="text"
              id="upiId"
              placeholder="Enter your UPI ID"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              required
              className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>

          {/* Payment Button */}
          <div className="mt-4">
            <button
              onClick={handleUpiSubmit}
              className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
              disabled={isProcessing || !upiId || amount === 0}
            >
              {isProcessing ? "Processing..." : "Pay with UPI"}
            </button>
          </div>
        </div>

        <div className="text-center mt-4 text-sm">
          <p>
            By proceeding, you agree to our{" "}
            <a href="/terms" className="text-blue-600">
              Terms & Conditions
            </a>{" "}
            and{" "}
            <a href="/privacy" className="text-blue-600">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpiPayment;

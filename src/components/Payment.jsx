import React, { useState, useEffect } from "react";

const UpiPayment = () => {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [vehicleType, setVehicleType] = useState("bike");
  const [amount, setAmount] = useState(0);
  const [upiId, setUpiId] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  // Simulated distance calculator
  const calculateDistance = () => {
    if (!pickup || !drop) return 0;
    // Fake distance based on character difference for demonstration
    return Math.max(1, Math.abs(pickup.length - drop.length) + 5);
  };

  const calculateAmount = () => {
    const distance = calculateDistance();
    let rate = 10;

    switch (vehicleType) {
      case "auto":
        rate = 15;
        break;
      case "car":
        rate = 20;
        break;
      default:
        rate = 10;
    }

    const totalAmount = distance * rate;
    setAmount(totalAmount);
  };

  useEffect(() => {
    calculateAmount();
  }, [pickup, drop, vehicleType]);

  const postdata = async () => {
    if (!upiId || !pickup || !drop || amount === 0) {
      alert("Please fill all required fields.");
      return;
    }

    const bookingData = {
      pick_loc: pickup,
      drop_loc: drop,
      vechile: vehicleType, // Matches backend spelling
      amount,
      upi_id: upiId,
    };

    try {
      const response = await fetch("http://localhost:3000/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        console.log(response);
        alert("Payment Successful!");
      } else {
        alert("Payment Failed. Try again.");
      }
    } catch (error) {
      console.error("Error posting data:", error);
      alert("Something went wrong!");
    } finally {
      setIsProcessing(false);
    }
  };

  const handlePayment = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      postdata();
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Make UPI Payment
        </h2>

        <form onSubmit={handlePayment} className="space-y-4">
          <div>
            <label htmlFor="pickup" className="block font-medium mb-1">
              Pickup Location:
            </label>
            <input
              type="text"
              id="pickup"
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
              value={drop}
              onChange={(e) => setDrop(e.target.value)}
              required
              className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>

          <div>
            <label htmlFor="vehicleType" className="block font-medium mb-1">
              Select Vehicle Type:
            </label>
            <select
              id="vehicleType"
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-blue-400"
            >
              <option value="bike">Bike</option>
              <option value="auto">Auto</option>
              <option value="car">Car</option>
            </select>
          </div>

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

          <div className="mt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
              disabled={isProcessing || !upiId || amount === 0}
            >
              {isProcessing ? "Processing..." : "Pay with UPI"}
            </button>
          </div>
        </form>

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

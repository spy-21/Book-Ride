import React from "react";

const Booking = () => {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen px-6 md:px-16 bg-gray-100">
        <div>
          <img
            src="https://5.imimg.com/data5/SELLER/Default/2021/10/JT/TB/SL/89088085/taxi-booking-application.png"
            alt=""
            className="w-150 h-auto rounded-xl shadow-lg"
          />
        </div>

        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg my-10 ">
          <h1 className="text-3xl font-bold mb-4 text-center">Booking</h1>
          <p className="text-center text-gray-600 mb-6">Book your ride now!</p>

          <h2 className="text-lg font-semibold mb-4 text-center">
            Pick a date and time for your ride
            <br />
            and we will get back to you as soon as possible
          </h2>

          <form className="space-y-4">
            <div>
              <label htmlFor="date" className="block font-medium mb-1">
                Date:
              </label>
              <input
                type="date"
                id="date"
                name="date"
                required
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div>
              <label htmlFor="time" className="block font-medium mb-1">
                Time:
              </label>
              <input
                type="time"
                id="time"
                name="time"
                required
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div>
              <label
                htmlFor="pickup-location"
                className="block font-medium mb-1"
              >
                Pickup Location:
              </label>
              <input
                type="text"
                id="pickup-location"
                name="pickup-location"
                required
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div>
              <label
                htmlFor="dropoff-location"
                className="block font-medium mb-1"
              >
                Dropoff Location:
              </label>
              <input
                type="text"
                id="dropoff-location"
                name="dropoff-location"
                required
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div>
              <label
                htmlFor="passenger-count"
                className="block font-medium mb-1"
              >
                Number of Passengers:
              </label>
              <input
                type="number"
                id="passenger-count"
                name="passenger-count"
                required
                min="1"
                max="10"
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div>
              <label htmlFor="vehicle-type" className="block font-medium mb-1">
                Vehicle Type:
              </label>
              <select
                id="vehicle-type"
                name="vehicle-type"
                required
                className="w-full border rounded px-3 py-2"
              >
                <option value="bike">Bike</option>
                <option value="auto">Auto</option>
                <option value="cab">Cab</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="special-requests"
                className="block font-medium mb-1"
              >
                Special Requests:
              </label>
              <textarea
                id="special-requests"
                name="special-requests"
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div className="flex justify-between space-x-2 pt-4">
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Book Now
              </button>
              <button
                type="reset"
                className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
              >
                Reset
              </button>
              <button
                type="button"
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Booking;

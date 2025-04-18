import React, { useState, useRef } from "react";

const countries = [
  { name: "India", code: "+91", length: 10 },
  { name: "United States", code: "+1", length: 10 },
  { name: "United Kingdom", code: "+44", length: 10 },
  { name: "UAE", code: "+971", length: 9 },
];

const Login = () => {
  const [country, setCountry] = useState(countries[0]);
  const [phone, setPhone] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", ""]);

  const inputsRef = useRef([]);

  const handleSendOtp = () => {
    if (phone.trim().length === country.length) {
      setOtpSent(true);
      alert(`OTP sent to ${country.code}${phone}`);
    } else {
      alert(`Please enter a valid ${country.length}-digit phone number`);
    }
  };

  const handleOtpChange = (value, index) => {
    if (/^\d?$/.test(value)) {
      const updatedOtp = [...otp];
      updatedOtp[index] = value;
      setOtp(updatedOtp);

      if (value && index < 4) {
        inputsRef.current[index + 1].focus();
      }
    }
  };

  const handleVerifyOtp = () => {
    const fullOtp = otp.join("");
    if (fullOtp.length === 5) {
      alert(`OTP ${fullOtp} verified for ${country.code}${phone}`);
    } else {
      alert("Please enter the complete 5-digit OTP");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Login
        </h2>

        <div className="mb-4">
          <label className="block mb-1 text-gray-700">Select Country:</label>
          <select
            value={country.name}
            onChange={(e) =>
              setCountry(
                countries.find((c) => c.name === e.target.value) || countries[0]
              )
            }
            className="border border-gray-300 rounded-lg p-2 w-full"
          >
            {countries.map((c) => (
              <option key={c.code} value={c.name}>
                {c.name} ({c.code})
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-gray-700">Phone Number:</label>
          <div className="flex">
            <span className="flex items-center px-3 bg-gray-200 border border-gray-300 rounded-l-lg text-gray-700">
              {country.code}
            </span>
            <input
              type="text"
              placeholder={`Enter ${country.length}-digit number`}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              maxLength={country.length}
              className="border-t border-b border-r border-gray-300 rounded-r-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        {!otpSent ? (
          <button
            onClick={handleSendOtp}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg w-full transition"
          >
            Send OTP
          </button>
        ) : (
          <>
            <div className="mb-4 mt-4">
              <label className="block mb-2 text-gray-700">Enter OTP:</label>
              <div className="flex justify-between gap-2">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    inputMode="numeric"
                    maxLength="1"
                    value={digit}
                    ref={(el) => (inputsRef.current[index] = el)}
                    onChange={(e) => handleOtpChange(e.target.value, index)}
                    className="w-12 h-12 text-center text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                ))}
              </div>
            </div>
            <button
              onClick={handleVerifyOtp}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg w-full transition"
            >
              Verify OTP
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;

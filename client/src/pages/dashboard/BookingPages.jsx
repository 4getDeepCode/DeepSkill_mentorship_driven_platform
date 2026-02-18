import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BookingPages = () => {
  const { username, serviceId } = useParams(); // Extract from URL
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const service = { price: 1 };
  const navigate = useNavigate();

  const onBookSession = () => {
    if (selectedDate && selectedTimeSlot) {
      navigate(`/mentor/${username}/service/${serviceId}/payment`, {
        state: {
          date: selectedDate,
          timeSlot: selectedTimeSlot,
          price: service?.price, // Replace with actual service data
        },
      });
    } else {
      alert("Please select a date and time slot before proceeding.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center py-10 px-4">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-semibold text-center text-orange-color mb-6">
          Book Your Session
        </h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700">Select Date</h3>
          <div className="flex gap-4 mt-4">
            <button
              onClick={() => setSelectedDate("2025-01-30")}
              className={`px-4 py-2 text-white rounded-lg ${
                selectedDate === "2025-01-30"
                  ? "bg-orange-color"
                  : "bg-blue-300 hover:bg-orange-color"
              }`}
            >
              30 Jan 2025
            </button>
            <button
              onClick={() => setSelectedDate("2025-02-01")}
              className={`px-4 py-2 text-white rounded-lg ${
                selectedDate === "2025-02-01"
                  ? "bg-blue-500"
                  : "bg-blue-300 hover:bg-blue-400"
              }`}
            >
              01 Feb 2025
            </button>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700">
            Select Time Slot
          </h3>
          <div className="flex gap-4 mt-4">
            <button
              onClick={() => setSelectedTimeSlot("09:00 AM")}
              className={`px-4 py-2 text-white rounded-lg ${
                selectedTimeSlot === "09:00 AM"
                  ? "bg-green-500"
                  : "bg-green-300 hover:bg-green-400"
              }`}
            >
              09:00 AM
            </button>
            <button
              onClick={() => setSelectedTimeSlot("09:30 AM")}
              className={`px-4 py-2 text-white rounded-lg ${
                selectedTimeSlot === "09:30 AM"
                  ? "bg-green-500"
                  : "bg-green-300 hover:bg-green-400"
              }`}
            >
              09:30 AM
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center mt-6">
          <div>
            <span className="text-xl font-semibold text-gray-700">Price:</span>
            <span className="text-lg text-orange-color">₹{service?.price}</span>
          </div>
          <button
            onClick={onBookSession}
            className="px-6 py-3 text-white bg-orange-color rounded-lg hover:bg-orange-color transition duration-300"
          >
            Book Session
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingPages;

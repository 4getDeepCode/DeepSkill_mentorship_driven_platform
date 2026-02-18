import { createOrder } from "@/aipManager/booking";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { date, timeSlot, price } = location.state || {}; // Grab state from the location

  const [mobileNumber, setMobileNumber] = useState("");
  const [orderId, setOrderId] = useState(null);

  // Load Razorpay script only if not already loaded
  useEffect(() => {
    if (!window.Razorpay) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      script.onload = () => console.log("Razorpay script loaded");
      script.onerror = () => console.error("Failed to load Razorpay script");
      document.body.appendChild(script);
    }
  }, []);

  // Make sure the `createOrder` function is being called with the required parameters
const handlePaymentProcess = async () => {
  if (!mobileNumber || !/^\d{10}$/.test(mobileNumber)) {
    alert("Please enter a valid 10-digit mobile number");
    return;
  }

  try {
    // Send necessary fields to the backend
    const order = await createOrder({
      amount: price,
      currency: "INR",
      name: "MentorzHive",  // Replace with actual product name or dynamic data
      description: `Payment for slot on ${date} at ${timeSlot}`,  // Replace with actual description
    });

    if (!order || !order.order_id) {
      alert("Failed to create order.");
      return;
    }

    setOrderId(order.order_id);

    // Initialize Razorpay with the response from createOrder
    const options = {
      key: order.key_id, // Razorpay Key ID from the API response
      amount: price * 100, // Convert to paise
      currency: "INR",
      order_id: order.order_id,
      name: order.product_name,  // Dynamically set from response
      description: order.description,  // Dynamically set from response
      prefill: {
        contact: mobileNumber,
      },
      handler: async (response) => {
        console.log("Payment successful", response);
        navigate(`/payment/verify-payment`, { state: { paymentData: response } });
      },
      theme: {
        color: "#3399cc",
      },
    };

    if (!window.Razorpay) {
      console.error("Razorpay script not loaded");
      return;
    }

    const rzp = new window.Razorpay(options);
    rzp.open();
  } catch (error) {
    console.error("Payment error:", error);
    alert("Payment Failed: " + error.message);
  }
};

  
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-100 min-h-screen">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-bold text-center text-gray-800">Confirm Your Payment</h2>
        <div className="mt-4 p-4 bg-blue-50 rounded-lg shadow-inner">
          <p className="text-gray-700 font-medium">Date: {date}</p>
          <p className="text-gray-700 font-medium">Time Slot: {timeSlot}</p>
          <p className="text-gray-700 font-medium text-lg">Total Price: ₹{price}</p>
        </div>

        {/* Mobile Number Input */}
        <div className="mt-4">
          <label className="block text-gray-600 font-medium">Enter Mobile Number</label>
          <input
            type="tel"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            maxLength={10}
            className="w-full px-3 py-2 mt-1 border rounded-md focus:ring focus:ring-blue-300"
            placeholder="Enter 10-digit mobile number"
          />
        </div>

        {/* Payment Button */}
        <button
          onClick={handlePaymentProcess}
          className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg"
        >
          Proceed to Pay ₹{price}
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;

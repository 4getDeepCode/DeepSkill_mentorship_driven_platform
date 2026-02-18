import { BASE_URL } from "@/const/env.const";
import AxiosInstances from ".";
// Payment API Calls
import axios from "axios";

const API_URL = `${BASE_URL}/payment`;

export const createOrder = async ({ amount, currency, name, description }) => {
  try {
    const response = await axios.post(`${API_URL}/create-order`, {
      amount,
      currency,
      name,
      description,
    });

    // Ensure that the order is correctly returned
    return response.data;
  } catch (error) {
    console.error("Error creating order:", error);
    throw new Error("Failed to create order");
  }
};


export const verifyPayment = async (paymentData) => {
  try {
    const response = await axios.post(`${API_URL}/verify-payment`, paymentData);
    return response.data;
  } catch (error) {
    console.error("Error verifying payment:", error);
    return null;
  }
};


const bookService = async (data) => {
  return await AxiosInstances.post("/booking/initiate-booking", data);
};
const getMentorBookings = async () => {
  return await AxiosInstances.get("/booking/mentor");
};
const getStudentBookigs = async () => {
  return await AxiosInstances.get("/booking/");
};

const booking = {
  bookService,
  getMentorBookings,
  getStudentBookigs,
  createOrder,
  verifyPayment
};

export default booking;

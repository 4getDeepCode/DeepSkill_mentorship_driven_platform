import Home from "@/pages";
import AllMentors from "@/pages/AllMentors";
import Booking from "@/pages/Booking";
import BookingDetails from "@/pages/dashboard/BookingDetails";
import BookingPages from "@/pages/dashboard/BookingPages";
import Bookings from "@/pages/dashboard/Bookings";
import Dashboard from "@/pages/dashboard/Dashboard";
import Payment from "@/pages/dashboard/Payment";
import PaymentPage from "@/pages/dashboard/PaymentPage";
import Profile from "@/pages/dashboard/Profile";
import Schedule from "@/pages/dashboard/Schedule";
import Services from "@/pages/dashboard/Services";
import MentorDetails from "@/pages/MentorDetails";
import PageNotFound from "@/pages/pageNotFound";
import Signin from "@/pages/Signin";
import Signup from "@/pages/Signup";
import SuccessPage from "@/pages/SuccessPage";
import React from "react";

const routes = [
  
  { path: "/", element: <Home />, isProtected: false },

  { path: "/signin", element: <Signin />, isProtected: false },

  {
    path: "/signup/:role",
    element: <Signup />,
    isProtected: false,
  },

  {
    path: "/dashboard",
    element: <Dashboard />,
    isProtected: true,
  },
  {
    path: "/dashboard/profile",
    element: <Profile />,
    isProtected: true,
  },
  {
    path: "/dashboard/services",
    element: <Services />,
    isProtected: true,
  },

  {
    path: "/dashboard/schedule",
    element: <Schedule />,
    isProtected: true,
  },
  {
    path: "/dashboard/payment",
    element: <Payment />,
    isProtected: true,
  },

  {
    path: "/mentors",
    element: <AllMentors />,
    isProtected: false,
  },
  {
    path: "/mentor/:username",
    element: <MentorDetails />,
    isProtected: false,
  },

  {
    path: "/dashboard/bookings",
    element: <Bookings />,
    isProtected: true,
  },
  {
    path: "/mentor/:username/:id",
    element: <Booking />,
    isProtected: true,
  },
  {
    path: "/user-bookings",
    element: <BookingDetails />,
    isProtected: true,
  },
  {
    path: "/mentor/:username/service/:serviceId",
    element: <BookingPages />,
    isProtected: true, // Set to true if the page requires authentication
  },
  {
    path: "/success",
    element: <SuccessPage />,
    isProtected: true,
  },

  {
    path: "*",
    element: <PageNotFound />,
    isProtected: false,
  },

  {
    path: "/mentor/:username/service/:serviceId/payment",
    element: <PaymentPage />,
    isProtected: true, // Optional: Based on your authentication logic
  },
];

export default routes;

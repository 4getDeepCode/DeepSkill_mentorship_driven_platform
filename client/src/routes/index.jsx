import Home from "@/pages";
import Bookings from "@/pages/dashboard/Bookings";
import Payment from "@/pages/dashboard/Payment";
import Profile from "@/pages/dashboard/Profile";
import Schedule from "@/pages/dashboard/Schedule";
import Services from "@/pages/dashboard/Services";
import Signin from "@/pages/Signin";
import Signup from "@/pages/Signup";
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
    path: "/dashboard/bookings",
    element: <Bookings />,
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
];


export default routes;

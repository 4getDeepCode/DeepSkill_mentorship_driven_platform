import Home from "@/pages";
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
];

export default routes;

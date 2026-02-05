const express = require("express");
const router = express.Router();
const authRoute = require("./authRoutes");
const userRoute = require("./userRoutes");
const serviceRoute = require("./serviceRoutes");
const mentorRoute = require("./mentorRoutes");
const bookingRoute = require("./bookingRoutes");


const Routes = [
  {
    path: "/auth",
    route: authRoute,
  },
  {
    path: "/user",
    route: userRoute,
  },
  {
    path: "/service",
    route: serviceRoute,
  },
  {
    path: "/mentor",
    route: mentorRoute,
  },
  {
    path: "/booking",
    route: bookingRoute,
  },
];
Routes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;

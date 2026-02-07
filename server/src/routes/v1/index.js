const express = require("express");
const router = express.Router();
const authRoute = require("./authRoutes");
const userRoute = require("./userRoutes");
const serviceRoute = require("./serviceRoutes");
const mentorRoute = require("./mentorRoutes");
const bookingRoute = require("./bookingRoutes");
const availabilityRoutes = require("./availabilityRoutes");
const homeRoute = require('./homeRoute')
const paymentRoutes = require('./paymentRoutes')
const invoiceRoute = require("./invoiceRoute")

const Routes = [
  {
    path: "/",
    route: homeRoute,
  },
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
  {
    path: "/availability",
    route: availabilityRoutes,
  },
  {
    path: "/payments",
    route: paymentRoutes,
  },

  {
    path: "/invoices",
    route: invoiceRoute,
  },
  
];
Routes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;

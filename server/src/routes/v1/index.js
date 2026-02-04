const express = require("express");
const router = express.Router();
const authRoute = require("./authRoutes");
const userRoute = require("./userRoutes");
const serviceRoute = require("./serviceRoutes");

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
  
];
Routes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;

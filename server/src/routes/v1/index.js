const express = require("express");
const router = express.Router();
const authRoute = require("./authRoutes");
const userRoute = require("./userRoutes");

const Routes = [
  {
    path: "/auth",
    route: authRoute,
  },
  {
    path: "/user",
    route: userRoute,
  },
];
Routes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;

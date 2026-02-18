const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
require("./config/db");
require("./jobs/expireBooking");

const errorHandler = require("./middleware/error");
const routes = require("./routes/v1");
const config = require("./config");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(config.PREFIX, routes);

app.use(errorHandler);

module.exports = app;

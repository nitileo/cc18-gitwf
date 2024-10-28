const express = require("express");
const authRoute = express.Router();

authRoute.post("/register", () => {
  console.log("Hello register");
});

module.exports = authRoute;

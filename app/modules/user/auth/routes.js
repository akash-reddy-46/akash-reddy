const express = require("express");
const AuthRoute = express.Router();
const AuthController = require("./controller");

AuthRoute.post("/otp/send", AuthController.sendOtp);
AuthRoute.post("/otp/verify",AuthController.verifyOtp)

module.exports = AuthRoute;

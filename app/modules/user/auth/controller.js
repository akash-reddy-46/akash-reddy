const authServices = require("./service");

async function sendOtp(req, res) {
  try {
    let { email, loginMode } = req.body;
    const genetateotp = await authServices.generateOtp(email, loginMode);
    if (genetateotp) {
      res.send({
        status: true,
        message: "generated OPT succfully",
        otp: genetateotp,
      });
    } else {
      res.send({ status: false, message: "something went wrong" });
    }
  } catch (error) {
    console.log("error message", error);
  }
}

async function verifyOtp(req, res) {
  try {
    let { email, otp,loginMode } = req.body;
    const verifyedotp = await authServices.verifyOtp(email, otp, loginMode);
    if (verifyedotp) {
      res.send({ status: true, message: "verified succesfully" });
    } else {
      res.send({ status: false, message: "some thing went " });
    }
  } catch (error) {
    console, log("error message", error);
  }
}

module.exports = { sendOtp,verifyOtp };

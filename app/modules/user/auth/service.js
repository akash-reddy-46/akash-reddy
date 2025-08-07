const crypto = require("crypto");
const { response } = require("express");
const storage = require("node-persist");

async function init() {
  await storage.init();
}

async function generateOtp(email, loginMode) {
  await init();
  try {
    const otp = crypto.randomInt(1000, 10000).toString();
    await storage.setItem(email, otp, { ttl: 300000 });
    return otp;
  } catch (error) {
    console.log("error message", error);
  }
}

async function verifyOtp(email, verifyOtp, loginMode) {
  await init();
  try {
    const otp = await storage.getItem(email);

    if (!otp || otp !== verifyOtp) {
      console.log("OTP expired or Invalid");
      return;
    }

    const sucess = await storage.removeItem(email);
    return sucess;
  } catch (error) {
    console.log("error message", error);
  }
}

module.exports = { generateOtp, verifyOtp };

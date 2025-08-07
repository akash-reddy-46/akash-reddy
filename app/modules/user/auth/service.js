const crypto = require("crypto");
const { response } = require("express");
const storage = require("node-persist");
const emailtemplate = require("../../../shared/templates/login").htmlContent;
const { sendMail } = require("../../../shared/email");
const Mustache=require("mustache")

async function init() {
  await storage.init();
}

async function generateOtp(email, loginMode) {
  await init();
  try {
    const sub = `login to Akash Reddy `;
    const otp = crypto.randomInt(1000, 10000).toString();
    await storage.setItem(email, otp, { ttl: 300000 });
    template = Mustache.render(emailtemplate, {OTP:otp});

    await sendMail("vangaakashreddy@gmail.com", email, sub, template);

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

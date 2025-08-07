const nodemailer = require("nodemailer");

module.exports = {
  sendMail,
};

async function sendMail(fromEmail, toEmails, subject, body) {
  if (typeof toEmails == "string") toEmails = [toEmails];
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "vangaakashreddy@gmail.com",
      pass: "iogf zldp gjjf fnka",
    },
  });

  let mailOptions = {
    from: fromEmail,
    to: toEmails,
    subject: subject,
    html: body,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (err) {
    throw err;
  }
}

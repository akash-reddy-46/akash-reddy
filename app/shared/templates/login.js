const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>Akash Reddy - OTP Verification</title>
<style>
  body {
    background-color: #0b0b0b;
    color: #ffffff;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
  }
  .container {
    max-width: 600px;
    margin: 40px auto;
    background-color: #121212;
    border-radius: 12px;
    padding: 20px 30px;
  }
  .header {
    background-color: #000;
    padding: 24px 16px;
    text-align: center;
    border-bottom: 1px solid #222;
  }
  .brand-name {
    font-family: 'Georgia', serif;
    color: #fff;
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    margin: 0;
  }
  .brand-name .initial {
    font-size: 60px;
    vertical-align: middle;
    font-weight: 900;
    font-family: 'Georgia', serif;
  }
  .brand-name .word-rest {
    font-size: 32px;
    font-weight: 600;
    vertical-align: middle;
  }
  .subtext {
    display: block;
    font-size: 13px;
    margin-top: 6px;
    color: #777;
  }
  .content {
    padding: 30px 0;
    text-align: center;
  }
  .content h2 {
    font-size: 22px;
    margin-bottom: 12px;
    color: #f5f5f5;
  }
  .content p {
    font-size: 14px;
    color: #bbb;
    margin-bottom: 24px;
  }
  .otp-code {
    font-size: 22px;
    letter-spacing: 6px;
    background-color: #000;
    padding: 10px 20px;
    display: inline-block;
    color: #ffffff;
    font-weight: bold;
    border-radius: 12px;
    text-shadow:
      0 0 5px rgba(255,255,255,0.5),
      0 0 10px rgba(255,255,255,0.3);
  }
  .note {
    font-size: 12px;
    color: #888;
    margin-top: 20px;
  }
  .footer {
    padding: 15px 0;
    text-align: center;
    font-size: 12px;
    color: #666;
    border-top: 1px solid #222;
    background-color: #111;
    margin-top: 30px;
  }
  @media only screen and (max-width: 600px) {
    .container {
      padding: 20px 16px;
    }
    .otp-code {
      font-size: 18px;
      letter-spacing: 4px;
      padding: 8px 16px;
    }
    .brand-name .initial {
      font-size: 40px;
    }
    .brand-name .word-rest {
      font-size: 22px;
    }
  }
</style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 class="brand-name">
        <span class="initial">A</span><span class="word-rest">kash</span><span> </span><span class="initial">R</span><span class="word-rest">eddy</span>
      </h1>
    </div>

    <div class="content">
      <h2>Verify Your Login</h2>
      <p>Please use the following OTP to complete your verification process.</p>
      <div class="otp-code">{{OTP}}</div>
      <p class="note">This OTP is valid for 1 minutes only. Do not share it with anyone.</p>
    </div>

    <div class="footer">
      If you didn’t request this, please ignore this message.<br />
      &copy; 2025 Akash Reddy . All rights reserved.
    </div>
  </div>
</body>
</html>`;

module.exports = {
  htmlContent,
};

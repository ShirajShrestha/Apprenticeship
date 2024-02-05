import nodemailer from "nodemailer";

const emailTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Recovery</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #f7f7f7;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 20px auto;
      padding: 20px;
      background-color: #fff;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
    }
    h1 {
      color: #007bff;
      text-align: center;
    }
    p {
      color: #555;
      font-size: 16px;
      line-height: 1.5;
    }
    .otp {
      font-size: 36px;
      font-weight: bold;
      color: #ff5722;
      text-align: center;
      margin-top: 20px;
      background-color: #fff3e0;
      padding: 10px;
      border-radius: 5px;
    }
    .footer {
      margin-top: 30px;
      text-align: center;
      color: #888;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Password Recovery</h1>
    <p>
      Hello [User Name],
    </p>
    <p>
      You have requested to reset your password. Use the following OTP (One-Time Password) to reset your password:
    </p>
    <div class="otp">[Generated OTP]</div>
    <p>
      If you didn't request a password reset, you can ignore this email.
    </p>
    <div class="footer">
      Best regards,<br>
      Phantom Orion
    </p>
  </div>
</body>
</html>`;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MY_EMAIL,
    pass: process.env.MY_PASSWORD,
  },
});

export const sendEmail = async () => {
  try {
    // const { to, subject, text } = req.body;

    const mailOptions = {
      //   from: "your-email@gmail.com",
      //   to,
      //   subject,
      //   text,
      from: '"Zarc Ahts 👻" <zarc@ahts.com>', // sender address
      to: "voyano2455@namewok.com", // list of receivers
      subject: "Reset Password", // Subject line
      //text: "Recovery Email", // plain text body
      html: emailTemplate, // html body
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error(error);
  }
};

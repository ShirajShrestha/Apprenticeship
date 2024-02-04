import nodemailer from "nodemailer";

const letterTemplate = `<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>CodePen - OTP Email Template</title>
  

</head>
<body>
<!-- partial:index.partial.html -->
<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
  <div style="margin:50px auto;width:70%;padding:20px 0">
    <div style="border-bottom:1px solid #eee">
      <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">Koding 101</a>
    </div>
    <p style="font-size:1.1em">Hi,</p>
    <p>Thank you for choosing Koding 101. Use the following OTP to complete your Password Recovery Procedure. OTP is valid for 5 minutes</p>
    <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">
    Change this to {OTP} later
    </h2>
    <p style="font-size:0.9em;">Regards,<br />Koding 101</p>
    <hr style="border:none;border-top:1px solid #eee" />
    <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
      <p>Zarc Inc</p>
      <p>Sanepa Lalitpur</p>
      <p>Nepal</p>
    </div>
  </div>
</div>
<!-- partial -->
  
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
      from: '"Fred Foo 👻" <foo@example.com>', // sender address
      to: "rilado5311@flexvio.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error(error);
  }
};

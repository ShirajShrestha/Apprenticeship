import nodemailer from "nodemailer";

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

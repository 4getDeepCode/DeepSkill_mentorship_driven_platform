const nodemailer = require("nodemailer");
const config = require("../config");

const transporter = nodemailer.createTransport({
  host: config.email.host,
  port: config.email.port,
  secure: config.email.port === 465, // true for 465, false for others
  auth: {
    user: config.email.auth.user,
    pass: config.email.auth.pass,
  },
});

//  VERIFY SMTP CONNECTION ON APP START
transporter.verify((error, success) => {
  if (error) {
    console.error("Email service failed to initialize");
    console.error(error.message);
  } else {
    console.log("Email service is ready and listening");
  }
});

const sendEmail = async ({ to, subject, html }) => {
  await transporter.sendMail({
    from: config.email.from,
    to,
    subject,
    html,
  });
};

module.exports = sendEmail;

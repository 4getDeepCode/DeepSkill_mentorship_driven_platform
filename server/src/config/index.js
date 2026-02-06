require("dotenv").config();

module.exports = {
  PORT: process.env.PORT,
  DB_URL: process.env.DB_URL,
  PREFIX: process.env.PREFIX || "/v1",

  jwt: {
    accessSecret: process.env.JWT_ACCESS_SECRET || "random-secret",
    accessExpirationMinutes: process.env.JWT_ACCESS_EXPIRATION_MINUTES || 1440,
    verificationSecret: process.env.JWT_VERIFICATION_SECRET || "random-secret",
    verificationExpirationMinutes:
      process.env.JWT_VERIFICATION_EXPIRATION_MINUTES || 1440,
  },
    cloudinary: {
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  },


  email: {
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
    from: process.env.EMAIL_FROM,
  },


  
  
};

const home = (req, res) => {
  res.status(200).json({
    success: true,
    name: "DeepSkill API",
    status: "running",
    environment: process.env.NODE_ENV || "development",
    version: "v1",
    timestamp: new Date().toISOString(),
    message: "Welcome to the DeepSkill server site 🚀"
  });
};

module.exports = home;
const UserModel = require("../models/userModel");
const ServiceModel = require("../models/serviceModel");

// Get all mentors
const getAllMentors = async () => {
  return await UserModel.find({ role: "mentor" });
};

// Get mentor by ID
const getMentorById = async (id) => {
  return await UserModel.findOne({ _id: id, role: "mentor" });
};

// Get mentor by username
const getMentorByUsername = async (username) => {
  return await UserModel.findOne({ username, role: "mentor" });
};

//Get Mentor Services By Username
const getMentorServicesByUsername = async (username) => {
  const mentor = await UserModel.findOne({
    username,
    role: "mentor",
  });

  if (!mentor) return null;

  const services = await ServiceModel.find({
    mentor: mentor._id,
    active: true,
  });

  return {
    mentor,
    services,
  };
};

module.exports = {
  getAllMentors,
  getMentorById,
  getMentorByUsername,
  getMentorServicesByUsername,
};

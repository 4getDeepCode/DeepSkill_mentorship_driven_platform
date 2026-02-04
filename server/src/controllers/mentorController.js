const ApiError = require("../helper/apiError");
const mentorService = require("../services/mentorService");
const httpStatus = require("../utils/httpStatus");

// Get all mentors
const getAllMentors = async (req, res) => {
  const mentors = await mentorService.getAllMentors();

  res.status(httpStatus.ok).json({
    success: true,
    mentors,
  });
};

// Get mentor by username
const getMentorInfoByUsername = async (req, res) => {
  const { username } = req.params;

  const mentor = await mentorService.getMentorByUsername(username);

  if (!mentor) {
    throw new ApiError(httpStatus.notFound, "Mentor not found");
  }

  res.status(httpStatus.ok).json({
    success: true,
    mentor,
  });
};

//Get Mentor Services By Username

const getMentorServices = async (req, res) => {
  const { username } = req.params;

  const result = await mentorService.getMentorServicesByUsername(username);

  if (!result) {
    throw new ApiError(httpStatus.notFound, "Mentor not found");
  }

  res.status(httpStatus.ok).json({
    success: true,
    mentor: {
      name: result.mentor.name,
      username: result.mentor.username,
      photoUrl: result.mentor.photoUrl,
      profile: result.mentor.profile,
    },
    services: result.services,
  });
};

module.exports = {
  getAllMentors,
  getMentorInfoByUsername,
  getMentorServices,

};

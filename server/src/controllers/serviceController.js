const httpStatus = require("../utils/httpStatus");
const ApiError = require("../helper/apiError");
const serviceService = require("../services/serviceService");

// CREATE SERVICE
const createService = async (req, res) => {
  const mentorId = req.user._id;
  const { serviceName, description, duration, price } = req.body;

  const service = await serviceService.createService({
    mentor: mentorId,
    serviceName,
    description,
    duration,
    price,
  });

  res.status(httpStatus.created).json({
    success: true,
    message: "Service created successfully",
    service,
  });
};

// UPDATE SERVICE
const updateService = async (req, res) => {
  const serviceId = req.params.serviceId;
  const mentorId = req.user._id;

  const updatedService = await serviceService.updateService(
    serviceId,
    mentorId,
    req.body
  );

  if (!updatedService) {
    throw new ApiError(httpStatus.notFound, "Service not found");
  }

  res.status(httpStatus.ok).json({
    success: true,
    message: "Service updated successfully",
    service: updatedService,
  });
};

// GET SERVICES BY MENTOR
const getServiceByMentor = async (req, res) => {
  const mentorId = req.user._id;
  const services = await serviceService.getServiceByMentor(mentorId);

  res.status(httpStatus.ok).json({
    success: true,
    services,
  });
};

// GET SERVICE BY ID
const getServiceById = async (req, res) => {
  const service = await serviceService.getServiceById(req.params.serviceId);

  if (!service) {
    throw new ApiError(httpStatus.notFound, "Service not found");
  }

  res.status(httpStatus.ok).json({
    success: true,
    service,
  });
};

// DELETE SERVICE BY ID

const deleteService = async (req, res) => {
  const serviceId = req.params.serviceId;
  const mentorId = req.user._id;

  const deletedService = await serviceService.deleteService(
    serviceId,
    mentorId
  );

  if (!deletedService) {
    throw new ApiError(
      httpStatus.notFound,
      "Service not found or not authorized"
    );
  }

  res.status(httpStatus.ok).json({
    success: true,
    message: "Service deleted successfully",
  });
};



module.exports = {
  createService,
  updateService,
  getServiceByMentor,
  getServiceById,
  deleteService,
};

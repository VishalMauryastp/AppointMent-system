const successResponse = (res, statuscode, message, data) => {
  return res.status(statuscode).json({ message: message, data: data });
};
const errorResponse = (res, statuscode, message, data) => {
  return res.status(statuscode).json({ message: message, data: data });
};

module.exports = { successResponse, errorResponse };

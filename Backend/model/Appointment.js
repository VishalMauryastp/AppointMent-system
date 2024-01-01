const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  doctorName: {
    type: String,
    required: true,
  },
  doctorSpecialization: {
    type: String,
    required: true,
  },
  appTime: {
    type: String,
    required: true,
  },
  appDate: {
    type: String,
    required: true,
  },
  patientName: {
    type: String,
    required: true,
  },
  patientAge: {
    type: String,
    required: true,
  },
  patientGender: {
    type: String,
    required: true,
  },
  patientPhoneNo: {
    type: String,
    required: true,
  },
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;

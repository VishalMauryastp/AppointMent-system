// this  contains actual responce req code in

const { successResponse, errorResponse } = require("../helpers/index.js");
const Appointment = require("../model/Appointment.js");
const UserModel = require("../model/userModel.js");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  registerUser: async (req, res) => {
    try {
      const reqBody = await req.body;

      const hashedPassword = await bcrypt.hash(reqBody.password, 10);

      const User = await new UserModel({
        fullName: reqBody.fullName,
        email: reqBody.email,
        password: hashedPassword,
      }).save();

      const data = {
        email: User.email,
      };

      return successResponse(res, 201, "Successfully Registerd", data);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "error", data: error });
      //    errorResponse(500, "error", error);
    }
  },

  loginUser: async (req, res) => {
    try {
      const user = await UserModel.findOne({ email: req.body.email });
      if (!user) {
        return errorResponse(401, "Invaild User");
      }

      const isPasswordEqual = await bcrypt.compare(
        req.body.password,
        user.password
      );

      if (!isPasswordEqual) {
        return errorResponse(401, "Invaild Password");
      }

      const tokenObject = {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
      };

      const jwtToken = jwt.sign(tokenObject, process.env.SECRET, {
        expiresIn: "4h",
      });

      return res.status(200).json({ jwtToken, tokenObject });
    } catch (error) {
      return errorResponse(500, "error", error.message);

      //   res.status(500).json({ message: "error", data: error });
    }
  },

  getUsers: async (req, res) => {
    try {
      const users = await UserModel.find({}, { password: 0 });

      return res.json({ data: users });
    } catch (error) {
      return errorResponse(res, 401, "error", error);

      //   res.status(401).json({ message: "error ", error });
    }
  },

  appointmentStatus: async (req, res) => {
    try {
      const userId = req.params.id;
      console.log("ascsa", userId);

      if (!userId) {
        return res
          .status(400)
          .json({ error: "UserId is required in the request body." });
      }

      const appointmentCount = await Appointment.countDocuments({ userId });

      if (appointmentCount > 0) {
        const appointments = await Appointment.find({ userId });
        res.status(200).json({ hasAppointments: true, appointments });
      } else {
        res.status(200).json({ hasAppointments: false });
      }
    } catch (error) {
      console.error("Error checking appointments:", error);
      res.status(500).json({ error: "Failed to check appointments." });
    }
  },

  appointment: async (req, res) => {
    try {
      console.log(req);
      const userId = req.body.userId;
      const appointmentData = {
        userId: userId,
        doctorName: req.body.doctor.dr_data.name,
        doctorSpecialization: req.body.doctor.dr_data.specialization,
        appTime: req.body.doctor.app_time,
        appDate: req.body.doctor.app_date,
        patientName: req.body.patientData.name,
        patientAge: req.body.patientData.age,
        patientGender: req.body.patientData.gender,
        patientPhoneNo: req.body.patientData.phoneNo,
      };
      const newAppointment = new Appointment(appointmentData);
      const savedAppointment = await newAppointment.save();

      res.status(201).json(savedAppointment);
    } catch (error) {
      console.error("Error saving appointment:", error);
      res
        .status(500)
        .json({ error: "Failed to save appointment. Please try again later." });
    }
  },
};

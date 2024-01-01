//  this is routes file where we decide the end point  of api

const express = require("express");
const {
  registerUser,
  getUsers,
  loginUser,
  appointment,
  appointmentStatus,
} = require("../controllers/controllers");

const routes = express.Router();

routes.get("/", async (req, res) => {
  res.json({ msg: "ji" });
});

routes.get("/", getUsers);
routes.get("/status/:id", appointmentStatus);
routes.post("/register", registerUser);
routes.post("/login", loginUser);
routes.post("/appointment", appointment);

module.exports = routes;

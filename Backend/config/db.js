// this file  contains db connection related code

const mongoose = require("mongoose");
const url = process.env.DB_URL;

mongoose
  .connect(url, {
    dbName: "appointment-system",
  })
  .then((res) => {
    console.log("db connected successfully");
  })
  .catch((err) => {
    console.log(err, "err in db connection");
  });

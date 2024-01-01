const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    fullName: {
      type:String,
      required: true,
    },
    email: {
      type:String,
      required: true,
      unique: true,
    },
    password: {
      type:String,
      required: true,
    },
  },
  { timeStamp: true }
);

const UserModel = mongoose.model("user", UserSchema);
module.exports = UserModel;

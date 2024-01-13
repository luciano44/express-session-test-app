const mongoose = require("mongoose")
require("dotenv").config()

mongoose.connect(process.env.DB_STRING)

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
})

const User = mongoose.model("user", userSchema)

module.exports = { User }

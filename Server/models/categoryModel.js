// import mongoose from "mongoose";

// const categorySchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     unique: true
//   },
// });

// // export default mongoose.model("Category", categorySchema);

// module.exports = mongoose.model("Category", categorySchema );  



// const mongoose = require("mongoose");

// const categorySchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     unique: true,
//   },
// });

// module.exports = mongoose.model("Category", categorySchema);

const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("Category", categorySchema);
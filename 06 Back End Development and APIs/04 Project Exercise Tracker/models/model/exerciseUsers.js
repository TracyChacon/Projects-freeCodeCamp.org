const mongoose = require('mongoose')

const excerciseUserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  count: {
    type: Number,
    required: true,
    default: 1,
  },

  discription: [String],

  duration: [Number],

  date: [Date],

  // log: [
  //   {
  //     description: {
  //       type: String,
  //       required: true,
  //     },
  //     duration: {
  //       type: Number,
  //       required: true,
  //     },
  //     date: {
  //       type: Date,
  //       required: true,
  //     },
  //   },
  // ],
  _id: mongoose.Schema.Types.ObjectId,
})

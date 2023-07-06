const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const librarySchema = new Schema({
    id:{
      type:Number,
      unique: true,
    },
    title: {
        type: String,
        required: true,
        unique: true,
      },
      location: {
        type: String,
        required: true,
      },
      number: { 
        type: String,
        required: true,
      }, 
      nonavaaal: {
        type: String,
      }, 
      status: {
        type: String,
      }, 
      createdAt: {
        type: Date,
        default: Date.now,
      },
});

module.exports = mongoose.model("Library", librarySchema);
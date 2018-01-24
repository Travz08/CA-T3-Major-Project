const mongoose = require('mongoose');

// schema for classroom
const classRoomSchema = mongoose.Schema({
  class_name: String,
  date_started: Date,
  date_ended: Date,
});

const ClassRoom = mongoose.model('Classroom', classRoomSchema)
module.exports = {ClassRoom}

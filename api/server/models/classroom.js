var mongoose = require('mongoose');


const classRoomSchema = mongoose.Schema({
  class_name: String,
  date_started: Number,
  date_ended: Number,
});

var ClassRoom = mongoose.model('Classroom', classRoomSchema)
module.exports = {ClassRoom}

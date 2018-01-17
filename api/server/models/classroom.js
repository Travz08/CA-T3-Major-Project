var mongoose = require('mongoose');


const classRoomSchema = mongoose.Schema({
  class_name: String,
  date_started: Date,
  date_ended: Date,
});

var ClassRoom = mongoose.model('Classroom', classRoomSchema)
module.exports = {ClassRoom}

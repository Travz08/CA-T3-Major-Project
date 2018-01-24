var mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

// model of a Log, with properties/ attricbutes we want the model to have
var Log = mongoose.model('Log', {
  date: Date,

  classroom_id: {type: ObjectId, ref: 'Classroom'}
});


module.exports = {Log}

var mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

// model of a todo, with properties/ attricbutes we want the model to have
var Log = mongoose.model('Log', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true

  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  },
  classroom_id: {type: ObjectId, ref: 'Classroom'}
});


module.exports = {Log}

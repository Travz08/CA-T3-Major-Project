var mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const TagSchema = mongoose.Schema({
  tag_name: {
    type: String,
    trim: true,
    uppercase: true
  },
  post_id: {type: ObjectId, ref: 'Post'}
})

var Tag = mongoose.model('Tag', TagSchema)
module.exports = {Tag}

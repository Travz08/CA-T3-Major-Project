var mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

// const log = {
//   type: ObjectId, ref:'Log'
// }

const PostSchema = mongoose.Schema({
  type: String,
  title: String,
  content: String,
  log_id: {type: ObjectId, ref: 'Log'},
  user_id: {type: ObjectId, ref: 'User'}
}
)

var Post = mongoose.model('Post', PostSchema)
module.exports = {Post}

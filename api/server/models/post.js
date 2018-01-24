var mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

//schema of posts. 
const PostSchema = mongoose.Schema({
  type: String,
  title: String,
  content: String,
  log_id: {type: ObjectId, ref: 'Log'},
  user_id: {type: ObjectId, ref: 'User'},
  profileName: String,
  image_url: String
}
)

var Post = mongoose.model('Post', PostSchema)
module.exports = {Post}

const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const { Schema } = mongoose;

const userSchema =  new Schema ({
  googleId: String,
  profileName: String,
  first_name: String,
  last_name: String,
})

mongoose.model('users', userSchema)

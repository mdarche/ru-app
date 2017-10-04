const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  email: String,
  createdDate: Date
});

mongoose.model('users', userSchema);

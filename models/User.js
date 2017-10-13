const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  email: String,
  gender: { type: String, default: 'unknown' },
  name: { first: String, last: String },
  createdDate: Date,
  school: String,
  gradYear: Number,
  registration: { type: Boolean, default: false }
});

mongoose.model('users', userSchema);

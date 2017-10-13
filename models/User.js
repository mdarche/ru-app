const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  email: String,
  gender: { type: String, default: 'unknown' },
  name: { first: String, last: String },
  createdDate: Date,
  educationLevel: { type: String, default: 'other' },
  schoolName: String,
  gradYear: Number,
  registration: { type: Boolean, default: false },
  instructorCodes: [Number]
});

mongoose.model('users', userSchema);

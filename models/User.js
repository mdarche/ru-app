const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  email: String,
  gender: { type: String, default: 'unknown' },
  name: { first: String, last: String },
  createdDate: Date,
  edLevel: { type: String, default: 'other' },
  school: { type: String, default: 'unknown' },
  gradYear: Number,
  state: String,
  registered: { type: Boolean, default: false },
  classCodes: [
    {
      classId: String,
      approved: { type: Boolean, default: false }
    }
  ]
});

mongoose.model('users', userSchema);

// const User = mongoose.model('users', userSchema);
//
// module.exports = User;

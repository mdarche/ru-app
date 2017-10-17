const mongoose = require('mongoose');
const { Schema } = mongoose;

const instructorSchema = new Schema({});

const Instructor = mongoose.model('instructors', instructorSchema);

module.exports = Instructor;

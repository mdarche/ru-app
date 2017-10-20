const mongoose = require('mongoose');
const { Schema } = mongoose;

const courseSchema = new Schema({});

mongoose.model('courses', courseSchema);

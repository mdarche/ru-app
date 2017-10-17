const mongoose = require('mongoose');
const { Schema } = mongoose;

const sectionSchema = new Schema({});

const Section = mongoose.model('sections', sectionSchema);

module.exports = Section;

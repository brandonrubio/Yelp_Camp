var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create Schema
var CampgroundSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

module.exports = Campground = mongoose.model('campground', CampgroundSchema);

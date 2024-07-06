const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  email: String,
  location: String,
  itemName: String,
  category: String,
  date: Date,
  description: String,
  images: [String],
  status: Boolean
});

const Lost = mongoose.model('Lost', reportSchema);
const Found = mongoose.model('Found', reportSchema);

module.exports = { Lost, Found };

const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  location: String,
  itemName: String,
  category: String,
  date: Date,
  description: String,
  images: [String]
});

const Lost = mongoose.model('Lost', reportSchema);
const Found = mongoose.model('Found', reportSchema);

module.exports = { Lost, Found };

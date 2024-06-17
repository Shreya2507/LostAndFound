const mongoose = require('mongoose')

const lostItemSchema = new mongoose.Schema({
    "name": { type: String, required: true },
    "location": { type: String, required: true },
    "category": { type: String, required: true },
    "date": { type: Date, required: true },
    "desc": { type: String },
})

module.exports = mongoose.model('lostItemData', lostItemSchema) 
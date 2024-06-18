const mongoose = require('mongoose')

const foundItemSchema = new mongoose.Schema({
    "name": { type: String, required: true },
    "location": { type: String, required: true },
    "category": { type: String, required: true },
    "date": { type: Date , required: true },
    "desc": { type: String },
    //Image
})

module.exports = mongoose.model('foundItemData', foundItemSchema) 
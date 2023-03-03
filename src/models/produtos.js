const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    name: String,
    price: Number
})

const model = mongoose.model('products', Schema)

module.exports = model
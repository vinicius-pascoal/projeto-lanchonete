const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    adress: String,
})

const model = mongoose.model('products', Schema)

module.exports = model
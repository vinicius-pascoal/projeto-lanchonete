const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    cliente: String,
    produto: String,
    status: String,
    date: Date,
})

const model = mongoose.model('products', Schema)

module.exports = model

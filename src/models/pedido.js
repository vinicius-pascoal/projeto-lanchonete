const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    status: String,

})

const model = mongoose.model('products', Schema)

module.exports = model
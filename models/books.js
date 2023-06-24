const mongoose = require('mongoose')
const { Schema } = mongoose

//Schema
const booksSchema = new Schema({
    title: String,
    description: String,
    year: Number,
    quantity: Number,
    imageURL: String

    })

    //model and export
    const Books = mongoose.model('Books', booksSchema)
    module.exports = Books
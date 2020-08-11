const mongoose = require("../database/db")
const { Decimal128 } = require("mongodb")

const LivroSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    isbn: {
        type: String,
        required: true
    },
    autor: {
        type: String, 
        required: true
    }
})

const Livro = mongoose.model("Livro", LivroSchema)

module.exports = Livro
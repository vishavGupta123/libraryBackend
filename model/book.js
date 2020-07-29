const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  isbn: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  onLoan: {
    type: Boolean,
    default: false,
  },
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;

const Book = require("../model/book");
const Rental = require("../model/rental");

module.exports.addBook = async function (req, res) {
  console.log(req.body);

  if (req.body.id && req.body.title && req.body.isbn && req.body.author) {
    let book = await Book.findById(req.body.id);
    if (book == null || book == undefined) {
      book = await Book.create({
        _id: req.body.id,
        title: req.body.title,
        isbn: req.body.isbn,
        author: req.body.author,
      });
      return res.status(200).json({
        message: "A New Book is being created",
        book: book,
      });
    } else {
      return res.status(200).json({
        message: "The book with this id number is already there",
      });
    }
  } else {
    return res.status(500).json({
      message: "Some fields are missing",
    });
  }
};

module.exports.getAllRentedBooks = async function (req, res) {
  try {
    let rentedBooks = await Rental.find({});
    console.log(rentedBooks);
    let booksArray = [];
    for (let i = 0; i < rentedBooks.length; i++) {
      let bookId = rentedBooks[i].book;
      let book = await Book.findById(bookId);
      booksArray.push(book.title);
    }
    return res.status(200).json({
      message: "List of all rented books",
      books: booksArray,
    });
  } catch (err) {
    console.log("Error", err);
    return res.status(500).json({
      message: "Server error",
    });
  }
};

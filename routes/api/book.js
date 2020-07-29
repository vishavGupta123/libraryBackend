const express = require("express");
const router = express.Router();
const booksController = require("../../controller/booksController");

router.post("/add_book", booksController.addBook);
router.get("/rented_books", booksController.getAllRentedBooks);

module.exports = router;

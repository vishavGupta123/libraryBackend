const Rental = require("../model/rental");
const Book = require("../model/book");
const CardHolder = require("../model/cardHolder");

module.exports.rentBook = async function (req, res) {
  try {
    const bookId = req.query.bookId;
    const cardHolderId = req.query.cardHolderId;
    console.log(bookId, " ", cardHolderId);
    let book = await Book.findById(bookId);
    if (book !== null && book !== undefined && book.onLoan === false) {
      book.onLoan = true;
      book.save();

      let cardHolder = await CardHolder.findById(cardHolderId);
      if (cardHolderId) {
        let rental = await Rental.create({
          book: bookId,
          cardHolder: cardHolderId,
        });

        if (rental) {
          return res.status(200).json({
            message: "The book has been rented successfully",
            cardHolderName: cardHolder.firstName + " " + cardHolder.lastName,
          });
        }
      }
    } else {
      //if book is not found with given id
      if (book == null) {
        return res.status(500).json({
          message: "This book does not exist",
        });
      }
      //if book is found but is already rented
      return res.status(400).json({
        message: "This book is already rented",
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const mongoose = require("mongoose");

const rentalSchema = new mongoose.Schema({
  cardHolder: {
    type: mongoose.Schema.Types.String,
    ref: "CardHolder",
  },
  book: {
    type: mongoose.Schema.Types.String,
    ref: "Book",
  },
});

const Rental = mongoose.model("Rental", rentalSchema);

module.exports = Rental;

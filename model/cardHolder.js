const mongoose = require("mongoose");

const cardHolderSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  cardNumber: {
    type: String,
    required: true,
  },
});

const CardHolder = mongoose.model("CardHolder", cardHolderSchema);

module.exports = CardHolder;

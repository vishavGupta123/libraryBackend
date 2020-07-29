const CardHolder = require("../model/cardHolder");

module.exports.addNewHolder = async function (req, res) {
  try {
    let cardHolder = await CardHolder.findById(req.body.id);
    if (cardHolder) {
      return res.status(200).json({
        message: "This card holder is already present",
      });
    }
    cardHolder = await CardHolder.create({
      _id: req.body.id,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      cardNumber: req.body.cardNumber,
    });
    if (cardHolder) {
      return res.status(200).json({
        message: "A new Card Holder is being created",
        cardHolder,
      });
    }
  } catch (err) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

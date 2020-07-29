const express = require("express");
const router = express.Router();
const cardHolderController = require("../../controller/cardHolderController");

router.post("/add_cardholder", cardHolderController.addNewHolder);

module.exports = router;

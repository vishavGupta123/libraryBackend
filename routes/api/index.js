const express = require("express");

const router = express.Router();

router.use("/book", require("./book"));
router.use("/rent", require("./rent"));
router.use("/cardholder", require("./cardHolder"));

module.exports = router;

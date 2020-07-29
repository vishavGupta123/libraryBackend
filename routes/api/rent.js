const express = require("express");
const router = express.Router();
const rentController = require("../../controller/rentController");

router.post("/rent_book", rentController.rentBook);

module.exports = router;

const express = require("express");
const apiController = require("../controllers/api");
const router = express.Router();

router.get("/customers", apiController.getCustomers);

router.post("/customers", apiController.createCustomers);

module.exports = router;

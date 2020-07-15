const express = require("express");
const customersController = require("../controllers/customers");
const router = express.Router();

router.get("/api/customers", customersController.getCustomers);

router.post("/api/customers", customersController.createCustomers);

module.exports = router;

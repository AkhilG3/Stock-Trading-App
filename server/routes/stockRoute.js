const express = require("express");
const router = express.Router();

const {
    getAllStocks,
    getSingleStock,
} = require("../controllers/stockController");

// Public Routes

// Search stocks
// Example: GET /api/stocks?search=apple
router.get("/", getAllStocks);

// Get stock details
// Example: GET /api/stocks/AAPL
router.get("/:symbol", getSingleStock);

module.exports = router;
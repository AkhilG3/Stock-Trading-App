const express = require("express");
const router = express.Router();

const {
    placeOrder,
    getOrders,
    getOrderById,
    cancelOrder,
} = require("../controllers/orderController");

const authMiddleware = require("../middlewares/authMiddleware");

// Protected Routes
router.post("/", authMiddleware, placeOrder);
router.get("/", authMiddleware, getOrders);
router.get("/:id", authMiddleware, getOrderById);
router.delete("/:id", authMiddleware, cancelOrder);

module.exports = router;
const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema();

const Transaction = mongoose.model("Transaction", TransactionSchema);

module.exports = { Transaction, TransactionSchema };

const mongoose = require("mongoose");

const LoanSchema = new mongoose.Schema({
  loan_id: { type: String },
  account_no: { type: String },
  principle: { type: Number },
  rate_of_interest: { type: Number },
  tenure: { type: Number },
  disbursed_amount: { type: Number },
  disbursed_date: { type: Date },
  monthly_payment: { type: Number },
  no_of_installments: { type: Number },
  accumulated_interest: { type: Number },
  opening_balance: { type: Number },
  closing_balance: { type: Number },
});

const Loan = mongoose.model("Loan", LoanSchema);

module.exports = { Loan, LoanSchema };

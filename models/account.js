const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema({
  bank_id: { type: String, trim: true },
  bank_name: { type: String, trim: true },
  bank_address: { type: String, trim: true },
  branch_name: { type: String, trim: true },
  ifsc_code: { type: String, trim: true },
  account_no: { type: String, trim: true },
  account_type: { type: String, trim: true },
  cif_id: { type: String, trim: true },
  beneficiary_name: { type: String, trim: true },
  beneficiary_address: { type: String, trim: true },
  beneficiary_phone_number: { type: String, trim: true },
  beneficiary_mobile_number: { type: String, trim: true },
  date_of_opening: { type: Date },
  balance: { type: Number, default: 0 },
  closing_balance: { type: Number, default: 0 },
  atm_pin: { type: String, trim: true },
  login_password: { type: String, trim: true },
  transaction_password: { type: String, trim: true },
});

const Account = mongoose.model("Account", AccountSchema);

module.exports = { Account, AccountSchema };

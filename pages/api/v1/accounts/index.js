import connectToMongoDb from "../../../../middleware/mongodb";
import { Account } from "../../../../models/account";

const handler = async (req, res) => {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        let result = await Account.find();
        res.status(200).json({ success: true, data: result });
      } catch (error) {
        res.status(500).json({ success: false, data: error });
      }
      break;
    case "POST":
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};

export default connectToMongoDb(handler);

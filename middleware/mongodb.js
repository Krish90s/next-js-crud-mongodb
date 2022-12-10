import mongoose from "mongoose";

mongoose.set("strictQuery", false);

const connectToMongoDb = (handler) => async (req, res) => {
  await mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to Database"))
    .catch((error) => console.log("Could not connect to database", error));

  return handler(req, res);
};

export default connectToMongoDb;

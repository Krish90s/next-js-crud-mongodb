import mongoose from "mongoose";

const connectToMongoDb = async () =>
  await mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to Database"))
    .catch((error) => console.log("Could not connect to database", error));

export default connectToMongoDb;

import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const URI = process.env.MONGO_URI;
    if (!URI) throw new Error("MONGO_URI missing in .env");

    await mongoose.connect(URI, {
      serverSelectionTimeoutMS: 5000,
    });

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB error:", error.message);
    process.exit(1);
  }
};

export default connectDB;

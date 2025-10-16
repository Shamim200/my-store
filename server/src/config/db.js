import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("mongodb connected ✅");
  } catch (error) {
    console.log("mongodb connection failed: ", error);
    process.exit(1);
  }
};

import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema(
  {
    title: { type: String, required: true }
  },
  { timestamps: true }
);

export default mongoose.model("Session", sessionSchema);

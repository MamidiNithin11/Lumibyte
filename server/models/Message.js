import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    sessionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Session",
      required: true,
    },
    sender: {
      type: String,
      enum: ["user", "bot"],
      required: true,
    },
    message: { type: String, required: true },

    // Structured response
    table: {
      type: [
        {
          key: String,
          value: mongoose.Schema.Types.Mixed,
        },
      ],
      default: [],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Message", messageSchema);

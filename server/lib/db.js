import mongoose from "mongoose";

// Event listeners (only set once)
mongoose.connection.on("connected", () => {
  console.log(" Database Connected");
});

mongoose.connection.on("error", (err) => {
  console.error(" MongoDB connection error:", err.message);
});

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI); // Full URI in .env
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1); // Exit if can't connect
  }
};

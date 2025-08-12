import jwt from "jsonwebtoken";

// Function to generate a token for a user
export const generateToken = (userId) => {
  // This will expire in 7 days; adjust as needed
  return jwt.sign(
    { userId },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
};

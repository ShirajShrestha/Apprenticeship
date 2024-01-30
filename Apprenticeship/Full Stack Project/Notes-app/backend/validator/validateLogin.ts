import { check } from "express-validator";

export const verifyEmail = [
  check("email", "Email is required").isEmail(),
  check("password", "Minimum 8 characters is required").isLength({ min: 8 }),
];

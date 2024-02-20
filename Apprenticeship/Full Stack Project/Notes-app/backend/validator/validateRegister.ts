import { body, check } from "express-validator";

export const verifyRegister = [
  check("userName", "User Name is required").isString(),
  check("email", "Email is required").isEmail(),
  check("password", "Minimum 8 characters is required").isLength({ min: 8 }),
];

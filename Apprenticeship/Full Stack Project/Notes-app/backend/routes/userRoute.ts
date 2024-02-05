import express from "express";
import {
  register,
  getUsers,
  login,
  mailService,
} from "../controllers/userController";
import { verifyRegister } from "../validator/validateRegister";
import { verifyEmail } from "../validator/validateLogin";

const router = express.Router();

//Register new user
router.post("/register", verifyRegister, register);
// Login
router.post("/login", verifyEmail, login);
// Forgot password
router.post("/forgotPassword");
// Send email
router.get("/sendEmail", mailService);

router.get("/get-users", getUsers);
router.get("/get-user");

export default router;

import express from "express";
import {
  register,
  getUsers,
  login,
  mailService,
  validUser,
} from "../controllers/userController";
import { verifyRegister } from "../validator/validateRegister";
import { verifyEmail } from "../validator/validateLogin";
import verifyToken from "../validator/auth";

const router = express.Router();

//Register new user
router.post("/register", verifyRegister, register);
// Login
router.post("/login", verifyEmail, login);
// validate user token
router.post("/validate-token", verifyToken, validUser);
// Forgot password
router.post("/forgotPassword");
// Send email
router.get("/sendEmail", mailService);

router.get("/get-users", getUsers);
router.get("/get-user");

export default router;

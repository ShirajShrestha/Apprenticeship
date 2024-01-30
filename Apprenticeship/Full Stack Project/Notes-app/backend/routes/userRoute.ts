import express from "express";
import { register, getUsers, login } from "../controllers/userController";
import { verifyRegister } from "../validator/validateRegister";
import { verifyEmail } from "../validator/validateLogin";

const router = express.Router();

//Register new user
router.post("/register", verifyRegister, register);
// Login
router.post("/login", verifyEmail, login);

router.get("/get-users", getUsers);

router.get("/get-user");

export default router;

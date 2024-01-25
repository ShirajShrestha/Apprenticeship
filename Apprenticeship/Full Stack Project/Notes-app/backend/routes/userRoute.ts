import express from "express";
import { register, getUsers } from "../controllers/userController";
import { verifyRegister } from "../validator/validateRegister";

const router = express.Router();

//Register new user
router.post("/register", verifyRegister, register);
router.get("/get-users", getUsers);

router.get("/get-user");

export default router;

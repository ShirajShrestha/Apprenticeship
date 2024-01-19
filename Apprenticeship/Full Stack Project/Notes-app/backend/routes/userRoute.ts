import express from "express";
import { addUser, getUsers } from "../controllers/userController";

const router = express.Router();

router.get("/get-users", getUsers);

router.get("/get-user");

router.post("/add-user", addUser);

export default router;

import db from "../models";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import {
  registerUser,
  getAllUsers,
  findUser,
} from "../repository/userRepository";
import { validationResult } from "express-validator";
import { jwtWithCookie } from "../services/Jwt";

export const register = async (req: Request, res: Response) => {
  const { userName, email, password, image } = req.body;

  //check if entries are empty or not
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: errors.array() });
  }

  try {
    let user = await findUser(email);

    // if email already exists
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // If new user, save
    const newUser = await registerUser(userName, email, password, image);

    //Jwt with cookie service
    jwtWithCookie(req, res, newUser);

    res.status(200).json({ message: "New User Added Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Something went wrong." });
  }
};

export const login = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: errors.array() });
  }

  const { email, password } = req.body;

  try {
    let user = await findUser(email);
    if (!user) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    // Jwt and cookie service
    jwtWithCookie(req, res, user);

    return res
      .status(200)
      .json({ message: "Login Successful", userId: user.id });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers();
    res.json({ users });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error Creating New User" });
  }
};

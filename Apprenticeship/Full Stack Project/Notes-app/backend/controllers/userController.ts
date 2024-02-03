import db from "../models";
import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import {
  registerUser,
  getAllUsers,
  findUser,
} from "../repository/userRepository";
import { validationResult } from "express-validator";
import { jwtWithCookie } from "../services/Jwt";
import { sendEmail } from "../services/SendMail";

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
    const user = await findUser(email);
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

export const forgotPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //1 get user based on the posted email
  const { email } = req.body;
  const user = await findUser(email);
  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }
  //2 genereate a random reset token
  //3 send the token to user email
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

// for sending email
export const mailService = async (req: Request, res: Response) => {
  const sendingEmail = sendEmail();
  if (!sendingEmail) {
    res.status(500).send({ message: "Error sending email" });
  }
  res.status(200).send({ message: "Email sent successfully!" });
};

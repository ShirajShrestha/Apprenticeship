import db from "../models";
import express, { Request, Response } from "express";
import { registerUser, getAllUsers } from "../repository/userRepository";
import { validationResult } from "express-validator";

// export type UserType = {
//   userName: string;
//   email: string;
//   password: string;
//   image: string;
//   status?: string;
//   logs?: string;
// };

export const register = async (req: Request, res: Response) => {
  const userName = req.body.userName;
  const email = req.body.email;
  const password = req.body.password;
  const image = req.body.image;

  //check if entries are empty or not
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: errors.array() });
  }

  try {
    let user = await db.User.findOne({
      where: {
        email: req.body.email,
      },
    });
    console.log(user);

    // if email already exists
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // If new user, save
    const newUser = await registerUser(userName, email, password, image);
    res
      .status(200)
      .json({ message: "New User Added Successfully", item: newUser });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Something went wrong." });
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

// import db from "../models";
import express, { Request, Response } from "express";
import { createNewUser, getAllUsers } from "../repository/userRepository";

export type UserType = {
  userName: string;
  email: string;
  password: string;
  image: string;
  status?: string;
  logs?: string;
};

export const addUser = async (req: Request, res: Response) => {
  const userName = req.body.userName;
  const email = req.body.email;
  const password = req.body.password;
  const image = req.body.image;

  try {
    const newUser = await createNewUser(userName, email, password, image);
    res
      .status(200)
      .json({ message: "New User Added Successfully", item: newUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error Creating New User" });
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

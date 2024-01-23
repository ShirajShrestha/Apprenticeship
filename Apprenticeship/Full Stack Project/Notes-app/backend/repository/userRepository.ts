import db from "../models";
import { UserType } from "../controllers/userController";

export const createNewUser = async (
  userName: string,
  email: string,
  password: string,
  image: string
) => {
  const userData = {
    userName: userName,
    email: email,
    password: password,
    image: image,
  };

  // return await db.User.create({
  //   userName: userName,
  //   email: email,
  //   password: password,
  //   image: image,
  // });
};

export const getAllUsers = async () => {
  return await db.User.findAll();
};

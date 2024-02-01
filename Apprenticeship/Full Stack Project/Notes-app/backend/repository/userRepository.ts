import db from "../models";
// import { UserType } from "../controllers/userController";
import bcrypt from "bcrypt";
import { bcryptPassword } from "../services/Bcrypt";

//Registering new user in db
export const registerUser = async (
  userName: string,
  email: string,
  password: string,
  image: string
) => {
  try {
    // const saltRounds = 12;
    // const salt = bcrypt.genSaltSync(saltRounds);
    // const hashPassword = await bcrypt.hashSync(password, salt);
    const hashPassword = await bcryptPassword(password);

    return await db.User.create({
      userName: userName,
      email: email,
      password: hashPassword,
      image: image,
    });
  } catch (error) {
    console.log(error);
  }
};

// fetching all user from db
export const getAllUsers = async () => {
  return await db.User.findAll();
};

// find user with email
export const findUser = async (email: string) => {
  return await db.User.findOne({
    where: {
      email: email,
    },
  });
};

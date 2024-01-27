import db from "../models";
// import { UserType } from "../controllers/userController";
import bcrypt from "bcrypt";
import { jwtWithCookie } from "../services/Jwt";

//Registering new user in db
export const registerUser = async (
  userName: string,
  email: string,
  password: string,
  image: string
) => {
  try {
    const saltRounds = 12;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashPassword = await bcrypt.hashSync(password, salt);

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

//check user for login

export const findUser = async (
  req: Request,
  res: Response,
  email: string,
  password: string
) => {};

import db from "../models";

export const createNewUser = async (
  userName: string,
  email: string,
  password: string,
  image: string
) => {
  return await db.User.create({
    userName: userName,
    email: email,
    password: password,
    image: image,
  });
};

export const getAllUsers = async () => {
  return await db.User.findAll();
};

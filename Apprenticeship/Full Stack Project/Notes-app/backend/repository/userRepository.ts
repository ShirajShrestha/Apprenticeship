import db from "../models/index";

export const createNewUser = async (userName, email, password, image) => {
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

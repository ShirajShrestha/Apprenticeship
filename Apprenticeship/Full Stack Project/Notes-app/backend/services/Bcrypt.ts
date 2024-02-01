import bcrypt from "bcrypt";

export const bcryptPassword = async (password: string) => {
  const saltRounds = 12;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hashPassword = await bcrypt.hashSync(password, salt);
  return hashPassword;
};

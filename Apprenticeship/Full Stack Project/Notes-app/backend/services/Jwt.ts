import jwt from "jsonwebtoken";
import { Request, Response } from "express";

export const jwtWithCookie = (req: Request, res: Response, newUser: any) => {
  const token = jwt.sign(
    { userId: newUser.id },
    process.env.JWT_SECRET_KEY as string,
    {
      expiresIn: "1d",
    }
  );

  res.cookie("auth_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 86400000,
  });
};

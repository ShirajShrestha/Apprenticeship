import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      userId: string;
    }
  }
}

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies["auth_token"];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    // const decoded = jwt.verify(token, process.env.JWT_SECURE_KEY as string);
    const decoded = jwt.verify(token, process.env.JWT_SECURE_KEY as string);
    // console.log(decoded);
    req.userId = (decoded as JwtPayload).userId;
    next();
  } catch (error) {
    console.log("JWT Verification Error:", error);
    return res.status(401).json({ message: "Unauthorized!" });
  }
};

export default verifyToken;

import jwt from "jsonwebtoken";

export const jwtWithCookie = (res, user) => {
  const token = jwt.sign(
    { userId: user.id },
    process.env.JWT_SECURE_KEY as string,
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

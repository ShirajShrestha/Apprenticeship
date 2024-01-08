import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import connectDb from "../config/dbConnection";
import authRoutes from "./routes/auth";
import userRoutes from "./routes/users";
import cookieParser from "cookie-parser";
import path from "path";
import connentCloudinary from "../config/connectCloud";

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
connectDb();
connentCloudinary();

const PORT = process.env.PORT;

app.use(express.static(path.join(__dirname, "../../frontend/dist")));

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});

import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import connectDb from "../config/dbConnection";
import userRoutes from "./routes/users";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
connectDb();

const PORT = process.env.PORT;

app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});

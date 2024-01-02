import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import connectDb from "../config/dbConnection";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
connectDb();

const PORT = process.env.PORT;

app.get("/api/test", (req: Request, res: Response) => {
  res.json({ message: "Hello from express endpoint!" });
  console.log("hi");
});

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});

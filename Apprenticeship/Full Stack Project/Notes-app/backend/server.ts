import express from "express";
import "dotenv/config";
import bodyParser from "body-parser";

//Routes
import userRoute from "./routes/userRoute";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/users", userRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server Started In Port:${process.env.PORT}`);
});

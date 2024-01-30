import express from "express";
import "dotenv/config";
import bodyParser from "body-parser";

//Routes
import userRoute from "./routes/userRoute";
import noteRoute from "./routes/noteRoute";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/users", userRoute);
app.use("/users/note", noteRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server Started In Port:${process.env.PORT}`);
});

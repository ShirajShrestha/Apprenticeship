const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.MONGODB_CONNECTION_LINK)
  .then(() => console.log("Conneted Mongodb"))
  .catch((e) => console.log(e));

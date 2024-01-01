const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
require("dotenv").config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT;
connectDb();

app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});

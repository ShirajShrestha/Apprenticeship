const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

app.use("/api/contacts", require("./routes/contactRoutes"));

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});

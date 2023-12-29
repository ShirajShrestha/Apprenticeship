const express = require("express");
const cors = require("cors");
const blogRouter = require("./routes/blogRoute");

require("dotenv").config();
require("./db");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/blogs", blogRouter);

app.use("/api", (req, res) => {
  res.send("Hello");
});

app.listen(process.env.PORT, () =>
  console.log(`App is running at port ${process.env.PORT} `)
);

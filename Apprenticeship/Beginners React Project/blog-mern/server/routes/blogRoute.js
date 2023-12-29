const express = require("express");
const blogRouter = express.Router();

const {
  fetchBlogs,
  addBlog,
  deleteBlog,
  updateBlog,
} = require("../controller/blogController");

blogRouter.get("/", fetchBlogs);
blogRouter.post("/add", addBlog);
blogRouter.put("/update/:id", updateBlog);
blogRouter.delete("/delete/:id", deleteBlog);

module.exports = blogRouter;

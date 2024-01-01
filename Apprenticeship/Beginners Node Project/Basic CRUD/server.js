require("dotenv").config();
const http = require("http");

const getReq = require("./methods/get-method");
const postReq = require("./methods/post-method");
const deleteReq = require("./methods/delete-method");
const putReq = require("./methods/put-method");
let movies = require("./data/movies.json");

const PORT = process.env.PORT || 5001;
const server = http.createServer((req, res) => {
  req.movies = movies;
  switch (req.method) {
    case "GET":
      getReq(req, res);
      break;
    case "POST":
      postReq(req, res);
      break;
    case "PUT":
      putReq(req, res);
      break;
    case "DELETE":
      deleteReq(req, res);
      break;
    default:
      res.statusCode = 404;
      res.setHeader("Content-Type", "application/json");
      res.write(
        JSON.stringify({ title: "Not Found", message: "Route Not Found" })
      );
      res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});

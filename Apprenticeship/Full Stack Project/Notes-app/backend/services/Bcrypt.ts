const { Sequelize, DataTypes } = require("sequelize");
const useBcrypt = require("sequelize-bcrypt");

const database = new Sequelize("FirstTest", "postgres", "shiraj3", {
  host: "localhost",
  dialect: "postgres",
});

const User = database.define("User", {
  userName: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING },
  image: { type: DataTypes.STRING },
});

useBcrypt(User, {
  field: "password", // secret field to hash, default: 'password'
  rounds: 12, // used to generate bcrypt salt, default: 12
  compare: "authenticate", // method used to compare secrets, default: 'authenticate'
});

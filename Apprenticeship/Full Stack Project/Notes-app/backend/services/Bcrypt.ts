const { Sequelize, DataTypes } = require("sequelize");
const useBcrypt = require("sequelize-bcrypt");

const database = new Sequelize({
  ...sequelizeConnectionOptions,
});

const User = database.define("User", {
  email: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING },
});

useBcrypt(User, options);

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Note extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Note.belongsTo(models.User, { foreignKey: "id" });
      Note.belongsToMany(models.Tag, {
        through: "NoteTags",
        foreignKey: "noteId",
      });
    }
  }
  Note.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      images: DataTypes.STRING,
      file: DataTypes.STRING,
      status: DataTypes.STRING,
      date: DataTypes.DATE,
      priority: DataTypes.STRING,
      tags: DataTypes.STRING,
      uid: {
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Note",
      // added these two to use softdelete
      // paranoid: "true",
      // timestamps:"true"
    }
  );
  return Note;
};

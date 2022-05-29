"use strict";
const { Model } = require("sequelize");
// const User = require("./user");
module.exports = (sequelize, DataTypes) => {
  class Disease extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Disease.belongsTo(models.User, {
        foreignKey: "user_id",
        as: "user",
      });
    }
  }
  Disease.init(
    {
      user_id: DataTypes.INTEGER,
      disease_name: DataTypes.STRING,
      description: DataTypes.TEXT,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Disease",
    }
  );
  return Disease;
};

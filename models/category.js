"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Product }) {
      // define association here
      this.hasMany(Product, {
        foreignKey: "categoryId",
        as: "categoryProduct",
        onDelete: "cascade",
      });
    }
    toJSON() {
      return {
        ...this.get(),
        id: undefined,
      };
    }
  }
  Category.init(
    {
      categoryUuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        unique: true,
      },
      name: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: "category",
      modelName: "Category",
    }
  );
  return Category;
};

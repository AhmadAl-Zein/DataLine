"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Category }) {
      // define association here
      this.belongsTo(Category, {
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
  Product.init(
    {
      productUuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        unique: true,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      creationDate: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notNull: { msg: "Creation date must have a date time" },
          notEmpty: { msg: "Creation date must not be an empty" },
        },
      },
      startDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      extras: {
        type: DataTypes.JSONB,
      },
    },
    {
      sequelize,
      tableName: "product",
      modelName: "Product",
    }
  );
  return Product;
};

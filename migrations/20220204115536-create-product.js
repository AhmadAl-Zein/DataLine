"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("product", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      productUuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        unique: true,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      creationDate: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
          notNull: { msg: "Creation date must have a date time" },
          notEmpty: { msg: "Creation date must not be an empty" },
        },
      },
      startDate: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      duration: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      extras: {
        type: Sequelize.JSONB,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("product");
  },
};

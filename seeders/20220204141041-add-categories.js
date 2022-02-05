'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "category",
      [
        {
          categoryUuid: "47a81d3e-1ee4-4e74-957f-29b80f5878c4",
          name: "CatA",
          createdAt: "2021-09-30T09:22:22.872Z",
          updatedAt: "2021-09-30T09:22:22.872Z",
        },
        {
          categoryUuid: "acedfdba-46a4-40a0-b3bd-74215ba1d16f",
          name: "CatB",
          createdAt: "2021-09-30T09:22:22.872Z",
          updatedAt: "2021-09-30T09:22:22.872Z",
        },
        {
          categoryUuid: "0efa2c6c-01c6-4379-b04c-0db48d539fea",
          name: "CatC",
          createdAt: "2021-09-30T09:22:22.872Z",
          updatedAt: "2021-09-30T09:22:22.872Z",
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

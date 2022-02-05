'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "user",
      [
        {
          userUuid: "47a81d3e-1ee4-4e74-957f-29b80f5878c4",
          name: "Ahmad Al-Zein",
          email: "ahmad@gmail.com",
          password: "$2b$10$GJ4IyukDOLFf5q5AM6WF4ebwm2HePfgKP/mxC3ZUsaVqt5ODU1wwS",
          isAdmin: true,
          createdAt: "2021-09-30T09:22:22.872Z",
          updatedAt: "2021-09-30T09:22:22.872Z",
        },
        {
          userUuid: "acedfdba-46a4-40a0-b3bd-74215ba1d16f",
          name: "Kinan",
          email: "kinan@gmail.com",
          password: "$2b$10$IS32M9N0MnJaVmW4lboJ2.yO3u3eeWMuxQWO0QQf9hyCaO1sffOda",
          isAdmin: false,
          createdAt: "2021-09-30T09:22:22.872Z",
          updatedAt: "2021-09-30T09:22:22.872Z",
        },
        {
          userUuid: "0efa2c6c-01c6-4379-b04c-0db48d539fea",
          name: "Rami",
          email: "rami@gmail.com",
          password: "$2b$10$2eLUQrObsODi8ytHEYSnHOW7zmusHj2TgVtN6UbC0HGeSkvxsu97q",
          isAdmin: false,
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

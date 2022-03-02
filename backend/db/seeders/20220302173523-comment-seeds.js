'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Comments', [
      {
        userId: 1,
        imageId: 1,
        comment: "That looks amazing, I can't wait to go",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        imageId: 2,
        comment: "That looks amazing, I can't wait to go",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        imageId: 2,
        comment: "Such a beautiful place, I can't wait to go back ",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        imageId: 4,
        comment: "That looks amazing, I can't wait to go",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Comments', null, {});
  }
};

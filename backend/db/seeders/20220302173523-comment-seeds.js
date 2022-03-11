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
        title: 'Such a beautiful pics ',
        comment: "That looks amazing, I can't wait to go",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        imageId: 1,
        title: 'Such a beautiful pics ',
        comment: "That looks amazing, I can't wait to go",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        imageId: 1,
        title: 'Such a beautiful pics ',
        comment: "That looks amazing, I can't wait to go",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        imageId: 2,
        title: 'Such a beautiful pics ',
        comment: "Such a beautiful place, I can't wait to go back ",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        imageId: 2,
        title: 'Such a beautiful pics ',
        comment: "Such a beautiful place, I can't wait to go back ",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        imageId: 2,
        title: 'Such a beautiful pics ',
        comment: "Such a beautiful place, I can't wait to go back ",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        imageId: 4,
        title: 'Such a beautiful pics ',
        comment: "That looks amazing, I can't wait to go",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        imageId: 4,
        title: 'Such a beautiful pics ',
        comment: "That looks amazing, I can't wait to go",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        imageId: 4,
        title: 'Such a beautiful pics ',
        comment: "That looks amazing, I can't wait to go",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        imageId: 3,
        title: 'Such a beautiful pics ',
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

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
        username: 'Demo-lition',
        title: 'Such a beautiful pics ',
        comment: "That looks amazing, I can't wait to go",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        imageId: 1,
        username: 'FakeUser1',
        title: 'Such a beautiful pics user2, did this though',
        comment: "That looks amazing, I can't wait to go",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        imageId: 1,
        username: 'FakeUser2',
        title: 'Such a beautiful pics, and this is done by user 3',
        comment: "That looks amazing, I can't wait to go",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        imageId: 2,
        username: 'Demo-lition',
        title: 'Such a beautiful pics ',
        comment: "Such a beautiful place, I can't wait to go back ",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        imageId: 2,
        username: 'FakeUser1',
        title: 'Such a beautiful pics ',
        comment: "Such a beautiful place, I can't wait to go back ",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        imageId: 2,
        username: 'FakeUser2',
        title: 'Such a beautiful pics ',
        comment: "Such a beautiful place, I can't wait to go back ",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        imageId: 4,
        username: 'Demo-lition',
        title: 'Such a beautiful pics ',
        comment: "That looks amazing, I can't wait to go",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        imageId: 4,
        username: 'FakeUser1',
        title: 'Such a beautiful pics ',
        comment: "That looks amazing, I can't wait to go",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        imageId: 4,
        username: 'FakeUser2',
        title: 'Such a beautiful pics ',
        comment: "That looks amazing, I can't wait to go",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        imageId: 3,
        username: 'Demo-lition',
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

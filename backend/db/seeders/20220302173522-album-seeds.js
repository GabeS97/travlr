'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Albums', [
      {
        userId: 1,
        title: 'SightSee',
        description: 'Must See Vacay Spots',
        imageUrl: 'https://subang.go.id/backend/images/default.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        title: 'My Favorites',
        description: 'Come Back Soon',
        imageUrl: 'https://subang.go.id/backend/images/default.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        title: 'Fam Faves',
        description: 'Family Favorites',
        imageUrl: 'https://subang.go.id/backend/images/default.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        title: 'SightSee',
        description: null,
        imageUrl: 'https://subang.go.id/backend/images/default.png',
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
    return queryInterface.bulkDelete('Albums', null, {});
  }
};

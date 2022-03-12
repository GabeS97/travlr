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
        description: 'List of must see places ',
        imageUrl: 'https://subang.go.id/backend/images/default.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        title: 'My Favorites',
        description: 'Go, if you get the chance',
        imageUrl: 'https://subang.go.id/backend/images/default.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        title: 'Fam Faves',
        description: 'Fam Faves!!',
        imageUrl: 'https://subang.go.id/backend/images/default.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        title: 'SightSee',
        description: 'List of must see places',
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

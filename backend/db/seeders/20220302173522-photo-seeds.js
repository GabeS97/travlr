'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Photos', [
      {
        userId: 1,
        albumId: 1,
        username: 'Demo-lition',
        tags: ['travel', 'backpack', 'vacation'],
        imageUrl: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        content: 'I love this pics',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        albumId: null,
        username: 'FakeUser2',
        tags: ['beach', 'relax', 'travel'],
        imageUrl: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        content: 'I love this pics',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        albumId: null,
        username: 'FakeUser1',
        tags: ['photo', 'photography', 'beauty', 'travel'],
        imageUrl: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        content: 'I love this pics',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        albumId: null,
        username: 'FakeUser1',
        tags: ['travel', 'passport', 'vacation'],
        imageUrl: 'https://media.istockphoto.com/photos/travel-planning-background-picture-id1309040743?b=1&k=20&m=1309040743&s=170667a&w=0&h=eyIzT1oSW2B5gPMPqgybEseIYIUrY96cxPTE_B0ewVs=',
        content: 'I love this pics',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        albumId: null,
        username: 'FakeUser2',
        tags: ['waterfall', 'nature', 'beauty'],
        imageUrl: 'https://media.istockphoto.com/photos/person-in-airport-using-mobile-app-in-phone-to-show-covid19-test-for-picture-id1295815184?b=1&k=20&m=1295815184&s=170667a&w=0&h=5qN-bkuJ8WFx8PJV_2W4zPXtkqh7vJfpjvv9YNXFYL0=',
        content: 'I love this pics',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        albumId: null,
        username: 'Demo-lition',
        imageUrl: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        content: 'I love this pics',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        albumId: null,
        username: 'Demo-lition',
        imageUrl: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        content: 'I love this pics',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        albumId: null,
        username: 'FakeUser2',
        imageUrl: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        content: 'I love this pics',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        albumId: null,
        username: 'FakeUser2',
        imageUrl: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        content: 'I love this pics',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        albumId: null,
        username: 'FakeUser2',
        imageUrl: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        content: 'I love this pics',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        albumId: null,
        username: 'FakeUser2',
        imageUrl: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        content: 'I love this pics',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        albumId: null,
        username: 'FakeUser2',
        imageUrl: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        content: 'I love this pics',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        username: 'FakeUser2',
        albumId: null,
        imageUrl: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        content: 'I love this pics',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        albumId: null,
        username: 'FakeUser2',
        imageUrl: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        content: 'I love this pics',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        albumId: null,
        username: 'FakeUser2',
        imageUrl: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        content: 'I love this pics',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        albumId: 2,
        username: 'Demo-lition',
        imageUrl: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        content: 'I love this pics',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        albumId: 2,
        username: 'Demo-lition',
        imageUrl: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        content: 'I love this pics',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        albumId: 2,
        username: 'Demo-lition',
        imageUrl: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        content: 'I love this pics',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        albumId: 2,
        username: 'Demo-lition',
        imageUrl: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        content: 'I love this pics',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        albumId: 2,
        username: 'Demo-lition',
        imageUrl: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        content: 'I love this pics',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        albumId: 2,
        username: 'Demo-lition',
        imageUrl: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        content: 'I love this pics',
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
    return queryInterface.bulkDelete('Photos', null, {});
  }
};

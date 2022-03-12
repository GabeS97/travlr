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
        imageUrl: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        content: 'I love this pics',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        albumId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        content: 'I love this pics',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        albumId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1506125840744-167167210587?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        content: 'I love this pics',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        albumId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1646330961359-a5d9c70793bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MjQ3MDQxMXx8ZW58MHx8fHw%3D&dpr=1&auto=format&fit=crop&w=294&q=60',
        content: 'I love this pics',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        albumId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1614640005509-2b10151cf3b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MzgzMjMwMHx8ZW58MHx8fHw%3D&dpr=1&auto=format&fit=crop&w=294&q=60',
        content: 'I love this pics',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        albumId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1642965961298-02f31304044d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MzY4ODE0MXx8ZW58MHx8fHw%3D&dpr=1&auto=format&fit=crop&w=294&q=60',
        content: 'I love this pics',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        albumId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1469521669194-babb45599def?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8NDg5NjU0fHxlbnwwfHx8fA%3D%3D&dpr=1&auto=format&fit=crop&w=294&q=60',
        content: 'I love this pics',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        albumId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1583844056361-4418a8f2a985?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MjEyMDMxNnx8ZW58MHx8fHw%3D&dpr=1&auto=format&fit=crop&w=294&q=60',
        content: 'I love this pics',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        albumId: 4,
        imageUrl: 'https://images.unsplash.com/photo-1499363536502-87642509e31b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        content: 'I love this pics',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        albumId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1469521669194-babb45599def?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8NDg5NjU0fHxlbnwwfHx8fA%3D%3D&dpr=1&auto=format&fit=crop&w=294&q=60',
        content: 'I love this pics',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        albumId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1583844056361-4418a8f2a985?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MjEyMDMxNnx8ZW58MHx8fHw%3D&dpr=1&auto=format&fit=crop&w=294&q=60',
        content: 'I love this pics',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        albumId: 4,
        imageUrl: 'https://images.unsplash.com/photo-1499363536502-87642509e31b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        content: 'I love this pics',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        albumId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1469521669194-babb45599def?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8NDg5NjU0fHxlbnwwfHx8fA%3D%3D&dpr=1&auto=format&fit=crop&w=294&q=60',
        content: 'I love this pics',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        albumId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1583844056361-4418a8f2a985?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MjEyMDMxNnx8ZW58MHx8fHw%3D&dpr=1&auto=format&fit=crop&w=294&q=60',
        content: 'I love this pics',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        albumId: 4,
        imageUrl: 'https://images.unsplash.com/photo-1499363536502-87642509e31b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
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

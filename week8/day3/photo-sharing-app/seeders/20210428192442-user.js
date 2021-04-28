'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      firstName: 'Nischal',
      lastName: 'Pahari',
      email: 'nischalp@nasa.gov',
      createdAt: new Date(),
      updatedAt: new Date()
  }], {});
},

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};

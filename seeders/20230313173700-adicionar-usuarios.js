'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', [  //sobe os dados ao banco
      { nome: 'John '}
    ],    {});
  },

  async down (queryInterface, Sequelize) { //retira dados do banco
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};


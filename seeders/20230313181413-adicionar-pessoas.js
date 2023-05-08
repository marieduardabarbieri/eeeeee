'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('pessoas', [  //sobe os dados ao banco
    { nome: 'John ', idade: '12', sobrenome:'Dohn'},
    { nome: 'Roberta ', idade: '22', sobrenome:'Dohn'},
    { nome: 'Andrea ', idade: '32', sobrenome:'Dohn'},
    { nome: 'Picolo ', idade: '42', sobrenome:'Dohn'},
    { nome: 'Andre ', idade: '52', sobrenome:'Dohn'}
  ],    {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pessoas', null, {});

  }
};

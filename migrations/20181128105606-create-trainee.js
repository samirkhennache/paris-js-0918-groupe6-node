'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('trainees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      lastname: {
        type: Sequelize.STRING
      },
      firstname: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      pictures: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.INTEGER
      },
<<<<<<< HEAD
      adress: {
=======
      address: {
>>>>>>> 595e7215c38f9e3460d43f1f6f2985372a0cb4b9
        type: Sequelize.STRING
      },
      town: {
        type: Sequelize.STRING
      },
      postalCode: {
        type: Sequelize.INTEGER
      },
      password: {
        type: Sequelize.STRING
      },
      isClosed: {
        type: Sequelize.BOOLEAN
      },
<<<<<<< HEAD
      isActieved: {
=======
      isActived: {
>>>>>>> 595e7215c38f9e3460d43f1f6f2985372a0cb4b9
        type: Sequelize.BOOLEAN
      },
      updatedAt: {
        type: Sequelize.DATE
      },
<<<<<<< HEAD
      createdAt: {
        type: Sequelize.DATE
      },
      reasonClosed: {
=======
      createAt: {
        type: Sequelize.DATE
      },
      reasonclosed: {
>>>>>>> 595e7215c38f9e3460d43f1f6f2985372a0cb4b9
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('trainees');
  }
};
"use strict";

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('user', {
    name: {
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.ENUM,
      values: ['active', 'inactive']
    },
    email: {
      type: Sequelize.STRING
    }
  });

  User.associate = function (models) {
    //associations can be define here
    User.hasMany(models.Messege, {
      foreignKey: 'id_messege',
      as: 'messeges'
    });
  };

  return User;
};
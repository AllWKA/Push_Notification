"use strict";

module.exports = function (sequelize, DataTypes) {
  var Messege = sequelize.define('messege', {
    title: {
      type: Sequelize.STRING
    },
    content: {
      type: Sequelize.STRING
    }
  });

  User.associate = function (models) {
    //associations can be define here
    User.hasMany(models.User, {
      foreignKey: 'id_user',
      as: 'users'
    });
  };

  return User;
};
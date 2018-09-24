'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING(30),
    lastName: DataTypes.STRING(30),
    email: DataTypes.STRING(50),
    createdAt: { type: DataTypes.DATE, allowNull: true, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, allowNull: true, },
  }, {
      // timestamps: false,
    });
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};
// USER MODEL
module.exports = (sequelize, Sequelize) => {
  const Users = sequelize.define('Users', {
      // Telegram id
      id: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      key: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      userType: {
        type: Sequelize.STRING,
        allowNull: false
      }
  });
  return Users;
};

// CHANNEL MODEL
module.exports = (sequelize, Sequelize) => {
  const Channels = sequelize.define('Channels', {
    id: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false
    }
  });
  return Channels;
};

// SCHEDULE MODEL
module.exports = (sequelize, Sequelize) => {
  const Schedules = database.define('Schedules', {
    id: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    channel: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: this.Channels,
          key: 'id'
        }
    },
    query: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: sequelize.Queries,
          key: 'id'
        }
    },
    date: {
      type: Sequelize.DATE,
      allowNull: false
    }
  });
  return Schedules;
};

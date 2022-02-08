// QUERY MODEL
module.exports = (sequelize, Sequelize) => {
  const Queries = sequelize.define('Queries', {
    id: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false
    },
    type: {
      type: Sequelize.STRING,
      allowNull: false
    },
    query: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });
  return Queries;
};

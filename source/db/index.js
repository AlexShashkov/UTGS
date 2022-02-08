const Sequelize = require("sequelize");
const fs = require('fs');

const { dialect, host, database_name, database_username, database_password, storage } = require('./config.json');
let sequelizez;
switch(dialect){
    case "sqlite":
        database = new Sequelize({
            dialect: 'sqlite',
            storage: storage
        });
        break;
    default:
        database = new Sequelize(database_name, database_username, database_password, {
            host: host,
            dialect: dialect
        });
        break;
}

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Channels = require("./models/Channels.js")(sequelize, Sequelize);
db.Queries = require("./models/Queries.js")(sequelize, Sequelize);
db.Schedules = require("./models/Schedules.js")(sequelize, Sequelize);
db.Users = require("./models/Users.js")(sequelize, Sequelize);

db.Channels.belongsToMany(db.Users, { through: "Users-Channels" });
db.Users.belongsToMany(db.Channels, { through: "Users-Channels" });

db.Users.sync();
db.Channels.sync();

module.exports = db;

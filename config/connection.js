// Require the dotenv module to give access to load environment variables
require("dotenv").config();

// Require the Sequelize module
const Sequelize = require("sequelize");

// Use environment variables to connect to the database
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: "localhost",
        dialect: "mysql",
        port: 3306
    }
);

// Export the sequelize instance for use in other modules
module.exports = sequelize;
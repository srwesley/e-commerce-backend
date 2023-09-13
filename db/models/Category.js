const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Category extends Model {}

Category.init(
    {
        // Defines the id column
        id: {
            type: DataTypes.INTEGER, // Sets the data type to integer
            allowNull: false, // Disallows NULL values
            primaryKey: true, // Sets the primary key
            autoIncrement: true, // Automatically increments the value for each new record
        },
        // Defines the "category_name" column
        category_name: {
            type: DataTypes.STRING, // Sets the data type to string
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "category",
    }
);

module.exports = Category;
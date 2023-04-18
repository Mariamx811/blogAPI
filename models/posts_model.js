const db = require("../config/db");
const {DataTypes} = require("sequelize");

module.exports = db.define("posts",
    {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
            ,
        },
        title:{
            type: DataTypes.STRING(100),
            allowNull: false
        },
        body:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: false
    }
)
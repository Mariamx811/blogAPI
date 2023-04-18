const db = require("../config/db");
const {DataTypes} = require("sequelize");

module.exports = db.define("users",
    {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
            ,
        },
        name:{
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        email:{
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        password:{
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        role:{
            type: DataTypes.ENUM('basic','premium','admin'),
            allowNull: false
        }
    },
    {
        timestamps: false
    }
)
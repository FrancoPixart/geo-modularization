const { psql } = require("../configDb");
const { DataTypes } = require("sequelize");

const users = psql.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    user: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    name: { type: DataTypes.STRING },
    last: { type: DataTypes.STRING },
    phone: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    range: { type: DataTypes.INTEGER, allowNull: false },
    geo_id: { type: DataTypes.INTEGER },
    date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    session_id: { type: DataTypes.STRING },
  },
  { timestamps: false }
);

module.exports = { users };
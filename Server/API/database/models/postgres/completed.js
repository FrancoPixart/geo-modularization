const { psql } = require("../configDb");
const { DataTypes } = require("sequelize");
const { devices } = require("./device");
const { actions } = require("./action");

//completed
const completed = psql.define(
  "completed",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: true,
      autoIncrement: true,
    },
    result: { type: DataTypes.STRING },
    date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  { timestamps: false }
);

actions.hasOne(completed);
devices.hasMany(completed);
module.exports = { completed };

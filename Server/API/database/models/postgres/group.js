const { psql } = require("../configDb");
const { DataTypes } = require("sequelize");
const { devices } = require("./device");
const { users } = require("./user");

const groups = psql.define(
  "groups",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: { type: DataTypes.STRING },
    visible: { type: DataTypes.BOOLEAN },
    user_id: { type: DataTypes.INTEGER },

    date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  { timestamps: false }
);

devices.belongsToMany(groups, { through: "devicesGroup" });
groups.belongsToMany(devices, { through: "devicesGroup" });

users.belongsToMany(groups, { through: "usersGroup", timestamps: false });
groups.belongsToMany(users, { through: "usersGroup", timestamps: false });

module.exports = { groups };
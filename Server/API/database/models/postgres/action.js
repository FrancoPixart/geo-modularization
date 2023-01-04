const { psql } = require("../configDb");
const { DataTypes } = require("sequelize");
const { devices } = require("./DeviceModel");
const { groups } = require("./GroupsModel");

//actions
const actions = psql.define(
  "actions",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: true,
      autoIncrement: true,
    },
    action: { type: DataTypes.STRING },
    data: { type: DataTypes.TEXT },
    date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  { timestamps: false }
);

//thief
const thief = psql.define(
  "thief",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    identity: { type: DataTypes.STRING },
    order_id: { type: DataTypes.STRING },
    images: { type: DataTypes.TEXT },
    path: { type: DataTypes.STRING },
    date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  { timestamps: false }
);
devices.belongsToMany(actions, {
  through: "devicesActions",
  timestamps: false,
});
actions.belongsToMany(devices, {
  through: "devicesActions",
  timestamps: false,
});
groups.belongsToMany(actions, { through: "groupsActions", timestamps: false });
actions.belongsToMany(groups, { through: "groupsActions", timestamps: false });

module.exports = { actions, thief };
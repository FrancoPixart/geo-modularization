const { psql } = require("../configDb");
const { DataTypes } = require("sequelize");
const { locations, trackings, findings } = require("./location");

const devices = psql.define(
  "devices",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    so: { type: DataTypes.STRING },
    type: { type: DataTypes.STRING },
    id_processor: { type: DataTypes.STRING },
    serial_number: { type: DataTypes.STRING },
    mac: { type: DataTypes.STRING },
    status_lock: { type: DataTypes.BOOLEAN },
    id_device: { type: DataTypes.STRING },
    last_connection: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    identity: { type: DataTypes.STRING, unique: true },
  },
  { timestamps: false }
);

locations.hasOne(devices);
devices.belongsTo(locations);

devices.hasMany(locations);
locations.belongsTo(devices);

devices.hasMany(trackings);
trackings.belongsTo(devices);

devices.hasMany(findings);
findings.belongsTo(devices);

module.exports = { devices };
const { psql } = require("../configDb");
const { DataTypes } = require("sequelize");

//tabla locations
const locations = psql.define(
  "locations",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    lat: { type: DataTypes.DOUBLE },
    lon: { type: DataTypes.DOUBLE },
    acc: { type: DataTypes.DOUBLE },
    ip_wan: { type: DataTypes.STRING },
    ip_lan: { type: DataTypes.STRING },
    place: { type: DataTypes.STRING },
    date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  { timestamps: false }
);

//tabla tracking
const trackings = psql.define(
  "tracking",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    order_id: { type: DataTypes.BIGINT },
    tracking: { type: DataTypes.TEXT },
    date_order: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    date_finish: { type: DataTypes.DATE },
  },
  { timestamps: false }
);

//tabla findings
const findings = psql.define(
  "findings",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    findings: { type: DataTypes.STRING },
    date: {
      type: DataTypes.TIME,
      defaultValue: DataTypes.NOW,
    },
  },
  { timestamps: false }
);

module.exports = {
  locations,
  trackings,
  findings,
};
const { psql } = require("../configDb");
const { DataTypes } = require("sequelize");
const { groups } = require("./group");

const preferences = psql.define(
  "preferences",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    time_connection: { type: DataTypes.INTEGER },
    time_persistence: { type: DataTypes.INTEGER },
    use_other: { type: DataTypes.BOOLEAN },
    use_google: { type: DataTypes.BOOLEAN },
    stats: { type: DataTypes.BOOLEAN },
    aplications: { type: DataTypes.BOOLEAN },
    time_location: { type: DataTypes.INTEGER },
    url_google: { type: DataTypes.STRING },
    key_google: { type: DataTypes.STRING },
    user_id: { type: DataTypes.INTEGER },
    Ws_port: { type: DataTypes.INTEGER },
    date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
  },
  { timestamps: false }
);

preferences.hasOne(groups, { foreignKey: "preferencesId" });

module.exports = { preferences };

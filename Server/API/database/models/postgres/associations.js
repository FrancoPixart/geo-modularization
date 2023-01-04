const { actions } = require("./action")
const { completed } = require("./completed");
const { defaultThief } = require("./defaultThief");
const { devices } = require("./device");
const { groups } = require("./group");
const { locations, trackings, findings } = require("./location");
const { preferences } = require("./preference");
const { users } = require("./user");

// Asociaciones de Actions
devices.belongsToMany(actions, { through: "devicesActions", timestamps: false });
actions.belongsToMany(devices, { through: "devicesActions", timestamps: false });
groups.belongsToMany(actions, { through: "groupsActions", timestamps: false });
actions.belongsToMany(groups, { through: "groupsActions", timestamps: false });

// Asociaciones de Completed
actions.hasOne(completed);
devices.hasMany(completed);

// Asociaciones de DefaultThief
defaultThief.hasOne(preferences);
preferences.belongsTo(defaultThief);

// Asociaciones de Devices
locations.hasOne(devices);
devices.belongsTo(locations);
devices.hasMany(locations);
locations.belongsTo(devices);
devices.hasMany(trackings);
trackings.belongsTo(devices);
devices.hasMany(findings)
findings.belongsTo(devices);

// Asociaciones de Groups
devices.belongsToMany(groups, { through: "devicesGroup" });
groups.belongsToMany(devices, { through: "devicesGroup" });
users.belongsToMany(groups, { through: "usersGroup", timestamps: false });
groups.belongsToMany(users, { through: "usersGroup", timestamps: false });

// Asociaciones de Preferences
preferences.hasOne(groups, { foreignKey: "preferencesId" });
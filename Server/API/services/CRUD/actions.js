const { actions, thief } = require("../../database/models/postgres/action");
const { completed } = require("../../database/models/postgres/completed");

/* Actions */
// read actions
const readAction = async (id, tables) => {
  try {
    let actionsDB;
    if (id != null) return (actionsDB = await actions.findAll({ where: id }));
    return (actionsDB = await actions.findAll());
  } catch (err) {
    console.error(err);
  }
};

/* Completed */
// create completed
const createCompleted = async (data) => {
  try {
    let completeDB;
    completeDB = await completed.create(data);
    return completeDB;
  } catch (err) {
    console.error(err);
  }
};

// read completed
const readCompleted = async (id) => {
  try {
    let completeDB;
    if (id != null)
      return (completeDB = await completed.findAll({ where: id }));
    return (completeDB = await completed.findAll());
  } catch (err) {
    console.error(err);
  }
};

/* Thief */
// create thief
const createThief = async (data) => {
  try {
    let newThief;
    return (newThief = await thief.create(data));
  } catch (err) {
    console.error(err);
  }
};

// read thief
const readThief = async (id) => {
  try {
    let thiefDB;
    if (id != null) return (thiefDB = await thief.findOne({ where: id }));
    return (thiefDB = await thief.findAll());
  } catch (err) {
    console.error(err);
  }
};

//update thief
const updateThief = async (id, data) => {
  try {
    let thiefDB = await readThief(id);

    if (!thiefDB || thiefDB.length === 0) {
      data.image = JSON.stringify(data.image);
      createThief(data);
    }

    let array = JSON.parse(thiefDB.images);
    data.images = JSON.stringify(JSON.parse(data.images).concat(array));
    thiefDB = Object.assign(thiefDB, data);
    thiefDB.save();
  } catch (err) {
    console.error(err);
  }
};

// delete thief
const deleteThief = async (id) => {};

module.exports = {
    readAction,
    createCompleted,
    readCompleted,
    createThief,
    readThief,
    updateThief,
    deleteThief,
}
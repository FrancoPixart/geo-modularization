const mongoose = require("mongoose");
const { mgdb } = require("../../db/db");

const schema = mongoose.Schema;

//Schema actions//
const actionsMgdb_Schemma = new mongoose.Schema({
  identity: {
    type: String,
    index: true,
    unique: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  actions: [
    {
      _id: schema.Types.ObjectId,

      date_order: {
        type: Date,
      },
      action: String,
      body: {},
    },
  ],
});
//Schema completed//
const completedMgdb_Schemma = new mongoose.Schema({
  identity: {
    type: String,
    index: true,
    unique: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  actions: [
    {
      _id: schema.Types.ObjectId,

      date_order: {
        type: Date,
      },
      date_completed: {
        type: Date,
      },
      action: String,
      body: {},
    },
  ],
});

const actionsMgdb = mongoose.model("actions", actionsMgdb_Schemma);
const completedMgdb = mongoose.model("completed", completedMgdb_Schemma);

module.exports = {
  actionsMgdb,
  completedMgdb,
};

const mongoose = require("mongoose");
const { mgdb } = require("../../db/db");
require("mongoose-double")(mongoose);

const schema = mongoose.Schema;

//Schema Thief//
const ThiefMdb_Schemma = new mongoose.Schema({
  identity: {
    type: String,
    index: true,
    unique: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  image: [
    {
      case: String,
      image: [],
    },
  ],
  locations: [
    {
      case: String,
      locations: [
        {
          type: String,
          coordinates: [Number],
          required: true,
          place: String,
          date: Date,
        },
      ],
    },
  ],
});

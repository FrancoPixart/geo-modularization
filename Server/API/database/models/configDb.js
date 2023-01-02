require("dotenv").config();
const { Sequelize } = require("sequelize");
const mongoose = require("mongoose");
const { Postgres, Mongo } = require("../../config/config");

//connexion a BD postgres
const psql = new Sequelize(Postgres.database, Postgres.user, Postgres.pass, {
  host: Postgres.host,
  schema: Postgres.schema,
  dialect: "postgres",
  logging: false,
});

//conexion a BD mongo
const mgdb = mongoose.connect(Mongo.uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

module.exports = { psql, mgdb };
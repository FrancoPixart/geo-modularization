const config = {
    App: {
      host: process.env.APP_HOST,
      httpport: process.env.APP_PORT,
      wsport: process.env.APP_PORT2,
      dirstorage: process.env.DIRSTORAGE,
    },
    Postgres: {
      user: process.env.PSQL_USERNAME,
      pass: process.env.PSQL_PASSWORD,
      host: process.env.PSQL_HOST,
      port: process.env.PSQL_PORT,
      database: process.env.PSQL_DATABASE,
      schema: process.env.PSQL_SCHEMA,
    },
    Mongo: {
      uri: process.env.MDB_URI,
    },
    Encrypt: {
      chars: process.env.CHAR_ENCRYPT,
      exp: process.env.NUMBER_ENCRYPT,
    },
    test: {
      conn: {
        closeTimeout: 5000,
        assembleFragments: true,
        maxReceivedMessageSize: 1048576000,
        outputBufferFull: false,
        inputPaused: false,
        webSocketVersion: 13,
        remoteAddresses: ["::ffff:186.137.145.22"],
      },
      device: { id: 1000000, identity: "lalalalal" },
    },
  };
  module.exports = config;
  
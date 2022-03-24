const parse = require("pg-connection-string").parse;

module.exports = ({ env }) => {
  const { host, port, database, user, password } = parse(env("DATABASE_URL"));
  return {
    defaultConnection: "default",
    connections: {
      default: {
        connector: "bookshelf",
        settings: {
          client: "postgres",
          host,
          port,
          database,
          user,
          password,
          schema: "public",
          ssl: {
            rejectUnauthorized: { rejectUnauthorized: false },
          },
        },
        options: {
          ssl: env.bool("DATABASE_SSL", false),
        },
      },
    },
  };
};

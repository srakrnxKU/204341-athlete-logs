// Update with your config settings.

module.exports = {
  production: {
    client: "sqlite3",
    connection: {
      filename: "database/dev.sqlite3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "database/migrations"
    }
  },
  development: {
    client: "mysql",
    connection: {
      host: "cherprang.srakrn.me",
      user: "softeng",
      password: "Okokfxf9dcBsM8vJ",
      database: "softeng"
    },
    migrations: {
      directory: "database/migrations"
    }
  }
};

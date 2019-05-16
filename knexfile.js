// Update with your config settings.

module.exports = {

  testing: {
    client: 'sqlite3',
    connection: {
      filename: './data/testDb.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    }
  },

};

const path = require('path');

module.exports = {
  sqlite: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, '../data/database/db.sqlite')
    },
    migrations: {
      tableName: 'migrations',
      directory: path.resolve(__dirname, '../data/database/migrations')
    },
    useNullAsDefault: true,
  },
};

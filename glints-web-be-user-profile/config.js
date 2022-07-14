const env = process.env;

const config = {
  db: { /* do not put password or any sensitive info here, done only for demo */
    host: env.DB_HOST || 'arjuna.db.elephantsql.com',
    port: env.DB_PORT || '5432',
    user: env.DB_USER || 'dncnbqyb',
    password: env.DB_PASSWORD || '8le3Vd0132XKcTsZ5R4m5QVwt9yZM_BN',
    database: env.DB_NAME || 'dncnbqyb',
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};

module.exports = config;

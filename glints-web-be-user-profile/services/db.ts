const { Pool } = require("pg");

const env = process.env;

const config = {
  db: {
    host: env.DB_HOST || "otto.db.elephantsql.com",
    port: env.DB_PORT || "5432",
    user: env.DB_USER || "cklijfef",
    password: env.DB_PASSWORD || "V1qidES5k3DSJICDRgXtyT8qeu2SPCZp",
    database: env.DB_NAME || "cklijfef",
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};

const pool = new Pool(config.db);
/**
 * Query the database using the pool
 * @param {*} query
 * @param {*} params
 *
 * @see https://node-postgres.com/features/pooling#single-query
 */
async function query(query: any, params: any) {
  const { rows, fields } = await pool.query(query, params);

  return rows;
}

module.exports = {
  query,
};

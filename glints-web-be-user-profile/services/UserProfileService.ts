const db = require("./db");

async function saveUserProfile() {
  const rows = await db.query(
    `INSERT INTO user_profile (email, user_full_name, user_age) VALUES('sample@email, 'name', 2)`
  );

  return rows;
}

module.exports = {
  saveUserProfile,
};

const db = require("./db");
const config = require("../config");

async function getUser(email) {
  const rows = await db.query(
    `SELECT up.id, up.email AS email,
    up.user_full_name AS name,
    up.user_age AS age,
    up.profile_image as "profile-image",

    (SELECT json_agg(json_build_object(
      'start-date',start_date,'end-date',end_date,'company',company, 'job-title',job_title, 'job-description',job_description)) 
      FROM user_work_experience 
      WHERE user_work_experience.user_profile_id = up.id) AS "work-experience"

    FROM user_profile up
    WHERE up.email = '${email}';
  `
  );

  return rows[0];
}

function validateCreate(user) {
  let messages = [];

  if (!user) {
    messages.push("No object is provided");
  }

  if (!user.email) {
    messages.push("Email is empty");
  }

  if (!user.name) {
    messages.push("Name is empty");
  }

  if (!user.age) {
    messages.push("Age is empty");
  }

  if (messages.length) {
    let error = new Error(messages.join());
    error.statusCode = 400;

    throw error;
  }
}

async function createUser(user) {
  validateCreate(user);

  const existingUser = await getUser(user.email);

  if (existingUser.length > 0) {
    let error = new Error("The user with email id already present");
    error.statusCode = 409;

    throw error;
  } else {
    const result = await db.query(
      `INSERT INTO user_profile(email, user_full_name, user_age) VALUES ('${user.email}', '${user.name}', ${(user.age)}) RETURNING id`
    );
    const createdUserId = result[0].id;
    if(createdUserId) {
      user['work-experience'].forEach(async experience => {
        await db.query(
          `INSERT INTO user_work_experience(
            user_profile_id, start_date, end_date, company, job_title, job_description) 
            VALUES 
            (${createdUserId}, 
            '${experience['start-date']}', 
            '${experience['end-date']}',
            '${experience['company']}',
            '${experience['job-title']}',
            '${experience['job-description']}')`
        );
      });
    }
    return {id: result[0]}.id;
  }
  return "Created";
}

module.exports = {
  getUser,
  createUser,
};

CREATE TABLE user_profile
(
  id SERIAL PRIMARY KEY,
  email TEXT NOT NULL,
  user_full_name TEXT NOT NULL,
  user_age NUMERIC NOT NULL,
  created_by TEXT DEFAULT NULL,
  updated_by TEXT DEFAULT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ
);

CREATE TABLE user_work_experience
(
  id SERIAL PRIMARY KEY,
  user_profile_id INTEGER NOT NULL REFERENCES  user_profile (id),
  start_date TEXT NOT NULL,
  end_date TEXT NOT NULL,
  company TEXT NOT NULL,
  job_title TEXT NOT NULL,
  job_description TEXT,
  created_by TEXT DEFAULT NULL,
  updated_by TEXT DEFAULT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ
);
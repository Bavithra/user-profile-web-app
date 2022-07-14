CREATE TABLE user_profile
(
  id SERIAL PRIMARY KEY,
  email TEXT NOT NULL,
  user_full_name TEXT NOT NULL,
  user_age NUMERIC NOT NULL,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
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
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);

ALTER TABLE user_profile
  ADD COLUMN profile_image TEXT NULL;
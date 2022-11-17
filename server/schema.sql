DROP DATABASE IF EXISTS filmo;
CREATE DATABASE filmo;

\c filmo;

CREATE TABLE IF NOT EXISTS users(
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  token text NOT NULL UNIQUE,
  username text NOT NULL UNIQUE,
  name text NOT NULL,
  email text NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS profiles(
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username text REFERENCES users(username),
  header text NOT NULL,
  follows text NOT NULL,
  followers text NOT NULL
);

CREATE TABLE IF NOT EXISTS photos(
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username integer REFERENCES users(id),
  url text,
  pinned boolean
);

SELECT setval('users_id_seq', (SELECT MAX(id) FROM users)+1);
SELECT setval('profiles', (SELECT MAX(id) FROM profiles)+1);
SELECT setval('photos_id_seq', (SELECT MAX(id) FROM photos)+1);

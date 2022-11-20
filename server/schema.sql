DROP DATABASE IF EXISTS filmo;
CREATE DATABASE filmo;

\c filmo;

CREATE TABLE IF NOT EXISTS users(
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  token text NOT NULL UNIQUE,
  username text NOT NULL UNIQUE,
  name text NOT NULL,
  email text NOT NULL UNIQUE,
  avatar text NOT NULL,
  header text NOT NULL,
  follows integer,
  followers integer
);

CREATE TABLE IF NOT EXISTS photos(
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username text REFERENCES users(username),
  url text,
  title text NOT NULL,
  description text,
  pinned boolean
);

CREATE TABLE IF NOT EXISTS comments(
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  photo integer REFERENCES photos(id),
  body text NOT NULL,
  username text NOT NULL
)

SELECT setval('users_id_seq', (SELECT MAX(id) FROM users)+1);
SELECT setval('photos_id_seq', (SELECT MAX(id) FROM photos)+1);
SELECT setval('comments_id_seq', (SELECT MAX(id) FROM comments)+1);

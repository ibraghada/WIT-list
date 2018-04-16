BEGIN;

DROP TABLE IF EXISTS categories, sub_cats, orgs, orgs_cats CASCADE;

CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  title VARCHAR NOT NULL
);

CREATE TABLE sub_cats (
  id SERIAL PRIMARY KEY,
  title VARCHAR NOT NULL,
  parent_cat INTEGER NOT NULL,
  parent_sub_cat INTEGER
);

CREATE TABLE orgs (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  website VARCHAR NOT NULL,
  description VARCHAR NOT NULL,
  operating VARCHAR NOT NULL,
  country VARCHAR NOT NULL,
  city VARCHAR NOT NULL,
  comments VARCHAR
);

CREATE TABLE orgs_cats (
  id SERIAL PRIMARY KEY,
  org_id INTEGER REFERENCES orgs(id) NOT NULL,
  cat_id INTEGER REFERENCES categories(id) NOT NULL,
  sub_cat_id INTEGER REFERENCES sub_cats(id) NOT NULL
);

COMMIT;

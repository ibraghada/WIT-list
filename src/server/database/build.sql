BEGIN;

DROP TABLE IF EXISTS cats, sub_cats, orgs, orgs_sub_cats CASCADE;

CREATE TABLE cats (
  id SERIAL PRIMARY KEY,
  title VARCHAR NOT NULL
);

CREATE TABLE sub_cats (
  id SERIAL PRIMARY KEY,
  title VARCHAR NOT NULL,
  parent_cat INTEGER REFERENCES cats(id) NOT NULL
);

CREATE TABLE orgs (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  website VARCHAR NOT NULL,
  description VARCHAR NOT NULL,
  operating VARCHAR NOT NULL,
  country VARCHAR NOT NULL,
  city VARCHAR NOT NULL,
  cat INTEGER REFERENCES cats(id) NOT NULL,
  comments VARCHAR
);

CREATE TABLE orgs_sub_cats (
  id SERIAL PRIMARY KEY,
  org_id INTEGER REFERENCES orgs(id),
  sub_cat_id INTEGER REFERENCES sub_cats(id) NOT NULL
);

COMMIT;

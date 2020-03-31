CREATE EXTENSION IF NOT EXISTS postgis;

CREATE TABLE countries (
    id varchar(10),
    name varchar(100),
    geom geometry(polygon, 4326) not null,
    primary key(id)
);

CREATE INDEX idx_countries ON countries USING gist(geom);

-- BEGIN;
-- CREATE TEMPORARY TABLE temp_json (values TEXT) ON COMMIT DROP;
-- CREATE TEMPORARY TABLE temp_countries (
--     id varchar(10),
--     name varchar(100),
--     geom geometry(polygon, 4326) not null
-- ) ON COMMIT DROP;

-- \copy temp_json FROM './countries.geojson';

-- insert into temp_countries (id, name, geom)
--   SELECT
--     feat->>'id' AS id,
--     feat->'properties'->>'name' AS name,
--     ST_SetSRID(ST_AsText(ST_GeomFromGeoJSON(feat->>'geometry')), 4326) AS geom
--   FROM (
--     SELECT json_array_elements(fc->'features') AS feat
--     FROM (
--       SELECT values::json AS fc FROM temp_json
--     ) AS t
--   ) AS f;

-- insert into countries (id, name, geom)
-- select * from temp_countries order by name;

-- COMMIT;

CREATE TABLE regions (
  id VARCHAR(200),
  name VARCHAR(100),
  geom geometry(multipolygon, 4326),
  PRIMARY KEY (id)
) ;

CREATE INDEX idx_regions ON regions USING gist(geom);

BEGIN;
CREATE TEMPORARY TABLE temp_json (values TEXT) ON COMMIT DROP;
CREATE TEMPORARY TABLE temp_regions (
    id VARCHAR(200),
    name VARCHAR(100),
    geom geometry(multipolygon, 4326),
    PRIMARY KEY (id)
) ON COMMIT DROP;

\copy temp_json FROM './periferies.geojson';

insert into temp_regions (id, name, geom)
  SELECT
    feat->'properties'->>'PER' AS name,
    feat->>'id' AS id,
    ST_SetSRID(ST_AsText(ST_GeomFromGeoJSON(feat->>'geometry')), 4326) AS geom
  FROM (
    SELECT json_array_elements(fc->'features') AS feat
    FROM (
      SELECT values::json AS fc FROM temp_json
    ) AS t
  ) AS f;

insert into regions (id, name, geom)
select * from temp_regions order by name;
COMMIT;


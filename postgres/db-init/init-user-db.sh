#!/bin/bash
set -e

echo "Creating db ..."

if psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" -c 'SELECT datname FROM pg_catalog.pg_database' | grep 'devdb'; then
  echo "DB is already created"
else
  psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
    CREATE DATABASE devdb;
    GRANT ALL PRIVILEGES ON DATABASE devdb TO postgres;
EOSQL
  echo "DB is now created!"
fi

FROM postgis/postgis

EXPOSE 5432

COPY ./datasets/countries.geojson /
COPY ./datasets/periferies.geojson /
COPY ./datasets/periferies.csv /

ADD ./db-init/ /docker-entrypoint-initdb.d/

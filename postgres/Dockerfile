FROM postgres

RUN  dpkg-divert --local --rename --add /sbin/initctl

RUN apt-get -y update; apt-get -y install gnupg2 wget ca-certificates rpl pwgen

RUN sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt/ stretch-pgdg main" > /etc/apt/sources.list.d/pgdg.list'
RUN wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | apt-key add -

RUN apt-get update; apt-get install -y postgresql-client-11 postgresql-common postgresql-11 postgresql-11-postgis-2.5 postgis netcat

EXPOSE 5432

COPY ./datasets/countries.geojson /
COPY ./datasets/periferies.geojson /
COPY ./datasets/periferies.csv /

ADD ./db-init/ /docker-entrypoint-initdb.d/

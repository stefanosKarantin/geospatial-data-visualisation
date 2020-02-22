from shp2postgis import pred2db
import psycopg2

try:
    conn = psycopg2.connect("dbname='devdb' user='postgres' host='localhost' port='5431' password='postgres'")
except:
    print ("I am unable to connect to the database")

conn.autocommit = True
cursor = conn.cursor()

pred2db.creategeotable(cursor, 'geodata')

pred2db.shp2table(cursor, './creta_data/whole/whole.shp', 'geodata')
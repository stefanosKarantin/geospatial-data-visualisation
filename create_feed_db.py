import psycopg2

from pred2db import creategeotable, shp2table
try:
    conn = psycopg2.connect("dbname='devdb' user='postgres' host='localhost' port='5431' password='postgres'")
    conn.autocommit = True
except:
    print ("I am unable to connect to the database")

cursor = conn.cursor()

creategeotable(cursor, 'crops')
 
shp2table(cursor, './shp_kk/CropType_only_predicted.shp', 'crops')
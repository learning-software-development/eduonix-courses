import sqlite3 as sql

database = sql.connect('test.db')

cursor = database.cursor()

cmd1 = "CREATE TABLE users(username TEXT, password TEXT)"
cmd2 = "INSERT INTO users (username, password) VALUES ('testuser', 'passtest123')"
cmd3 = "SELECT * FROM users"

cursor.execute(cmd1)
cursor.execute(cmd2)
database.commit()

cursor.execute(cmd3)
for user in cursor:
    print(user)

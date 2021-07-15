import base64
import json

my_data_file = open('data/data_save.dat', 'rb')
data_bytes = base64.b64decode(my_data_file.read())
ascii_data = data_bytes.decode('ascii')

my_data_file.close()

print(ascii_data)
print(type(ascii_data))

data = json.loads(ascii_data)

print(data)
print(type(data))

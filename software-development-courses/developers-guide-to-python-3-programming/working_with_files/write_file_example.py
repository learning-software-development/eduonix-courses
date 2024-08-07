# https://www.kite.com/python/answers/how-to-write-bytes-to-a-file-in-python
# https://stackoverflow.com/questions/55277431/python-convert-dictionary-to-bytes/55277757

import base64
import json

data_to_write = {
    'id': 1,
    'name': 'data',
    'valid': True
}

the_data = str(data_to_write)

user_encode_data = json.dumps(data_to_write).encode('ascii')
print(user_encode_data)
print(type(user_encode_data))

output_byte = base64.b64encode(user_encode_data)
print(output_byte)
print(type(output_byte))

my_data_file = open('data/data_save.dat', 'wb')
my_data_file.write(output_byte)

my_data_file.close()

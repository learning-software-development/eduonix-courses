const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient('mongodb://localhost:27017', {useUnifiedTopology: true});

client.connect((err) => {
  if(err) {
    console.error('There has been an error', err);
    return;
  } else {
    console.log('Connection was successful!');
  }

  const db = client.db('test');
  client.close();
});

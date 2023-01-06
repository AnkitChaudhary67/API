const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:3000';
const dbName = 'api_web_tech_assignment';

MongoClient.connect(url, (err, client) => {
  if (err) {
    console.error(err);
    return;
  }

  const db = client.db(dbName);
  console.log(`Connected to ${dbName}`);

 

  client.close();
});


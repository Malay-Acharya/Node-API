const mongoose = require('mongoose');

async function connect(){
    await mongoose.connect('mongodb://localhost:27017/nodeAPI')
}

module.exports = connect();


// const { MongoClient } = require('mongodb');

// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);

// const dbName = 'nodeAPI'

// async function connect(){
//     await client.connect();
//     const db = await client.db(dbName);
//     return db;
// }


// module.exports = connect;
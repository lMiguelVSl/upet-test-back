const mongodb = require('mongodb');
const mongoDbClient = mongodb.MongoClient;

let _db;
const mongoConnect = callback => {
    mongoDbClient.connect('mongodb+srv://sanchezvc:Miguel2309mM@cluster0.ciy4ggr.mongodb.net/user?retryWrites=true&w=majority')
        .then(client => {
            console.log('MONGO DB CONNECTED');
            _db = client.db();
            callback();
        })
        .catch(err => {
            console.log('ERROR CONNECTION', err);
        })
};

const getDb = () => {
    if (_db) return _db;
    throw 'no database';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
const mongodb = require('mongodb');
const mongoDbClient = mongodb.MongoClient;

const mongoConnect = callback => {
    mongoDbClient.connect('mongodb+srv://sanchezvc:***@cluster0.ciy4ggr.mongodb.net/?retryWrites=true&w=majority')
        .then(client => {
            console.log('MONGO DB CONNECTED');
            callback(client);
        })
        .catch(err => {
            console.log('ERROR CONNECTION', err);
        })
};

module.exports = mongoConnect;
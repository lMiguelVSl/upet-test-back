const { ObjectId } = require('mongodb');

const getDb = require('../util/database').getDb;

module.exports = class User {

    constructor(name, lastName, phoneNumer, email, password) {
        this.name = name;
        this.lastName = lastName;
        this.phoneNumer = phoneNumer;
        this.email = email;
        this.password = password;
    }

    save() {
        const db = getDb();
        return db.collection('user').insertOne(this)
    }

    fetchUser(id) {
        const db = getDb();
        const userId = new ObjectId(id);
        return db.collection('user').find({ _id: userId });
    }
}
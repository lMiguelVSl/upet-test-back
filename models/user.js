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

    fetchUser() {
        //get user after being saved
    }
}
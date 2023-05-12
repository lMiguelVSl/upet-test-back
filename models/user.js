module.exports = class User {

    constructor(name, lastName, phoneNumer, email, password) {
        this.name = name;
        this.lastName = lastName;
        this.phoneNumer = phoneNumer;
        this.email = email;
        this.password = password;
    }

    save() {
        //save user in data base
        return 1;
    }

    fetchUser() {
        //get user after being saved
    }
}
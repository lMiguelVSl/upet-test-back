const User = require("../models/user");
const validateUser = require('../helpers/data-validation').validateUser;

exports.getUser = async (req, res, next) => {
    let user = new User();
    let response;
    await user.fetchUser(req.params.id)
        .next()
        .then(user => {
            console.log('USER THEN FETCH', user)
            response = user;
        })
        .catch(err => {
            console.log('ERROR GET USER DB');
        });
    console.log('USER BEFORE RESPONSE', response);
    res.status(200).json({
        user: response
    });
}
exports.postUser = async (req, res, next) => {
    const name = req.body.name;
    const lastName = req.body.lastName;
    const phoneNumber = req.body.phoneNumber;
    const email = req.body.email;
    const password = req.body.password;
    const user = new User(name, lastName, phoneNumber, email, password);
    let userReq = {
        name,
        lastName,
        phoneNumber,
        email,
        password
    }
    let userValidation = validateUser(userReq);
    if (userValidation) {
        let userResult;
        await user.save()
            .then(res => userResult = res.insertedId)
            .catch(err => console.log('CATCH RES CONTROLLER', err));
        res.status(201).json({
            userResult: { id: userResult }
        })
    } else {
        res.status(400).json({
            userValidation: 'USER DATA VALIDATION FAILED'
        });
    }
};
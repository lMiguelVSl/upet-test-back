const User = require("../models/user");

exports.getUser = (req, res, next) => {
    res.status(200).json({
        user: {name: 'Miguel', lasName: 'Vargas', phoneNumber: 324476659, email: 'sanchez.vc2345@hotmail.com', password: 'Miguel4567*1'}
    });
}
exports.postUser = async (req, res, next) => {
    const name = req.body.name;
    const lastName = req.body.lastName;
    const phoneNumber = req.body.phoneNumber;
    const email = req.body.email;
    const password = req.body.password;
    const user = new User(name, lastName, phoneNumber, email, password);
    let userResult;
    await user.save()
    .then(res => userResult = res.insertedId)
    .catch(err => console.log('CATCH RES CONTROLLER', err));
    res.status(201).json({
        userResult: { id: userResult}
    })
};
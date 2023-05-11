exports.getUser = (req, res, next) => {
    res.status(200).json({
        user: {name: 'Miguel', lasName: 'Vargas', phoneNumber: 324476659, email: 'sanchez.vc2345@hotmail.com', password: 'Miguel4567*1'}
    });
}
exports.postUser = (req, res, next) => {
    res.json();
};
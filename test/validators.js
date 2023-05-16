const expect = require('chai').expect;

const {validateUser} = require('../helpers/data-validation');

it('should be correct user', () => {
    let userReq = {
        name: 'Miguel',
        lastName: 'Vargas',
        phoneNumber: '(631) 456-8654',
        email: 'miguel@email.com',
        password: 'qW123456'
    }
    expect(validateUser(userReq)).to.equal(true);
})

it('should be incorrect user', () => {
    let userReq = {
        name: 'Miguel',
        lastName: 'Vargas',
        phoneNumber: '(631) 456-8654',
        email: 'miguel@email',
        password: 'qW123456'
    }
    expect(validateUser(userReq)).to.equal(false);
})
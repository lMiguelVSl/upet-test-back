# upet-test-back

# This is a nodeJs application based on express to manage the server side,

# you are going to find one route "/form" this route is going to manage.

# two actions:
- router.get('/getUser/:id', formController.getUser);
- router.post('/postUser', formController.postUser);

# GET/POST

to setup the project in your local environment ou should follow the next steps:

into you directory to have the repository:

 - git clone https://github.com/lMiguelVSl/upet-test-back.git
 - npm intall
 - npm i --save express
- npm install --save body-parser

go to src/util/database.js en the line 6 you should put your mongodb atlass cluster to connect to your database


with these changes you should be able to excecute 'npm start' into the directory and the node server will be listening into the port 8080

if you wan to test the endpoint with postman these are the urls to test:

method POST:   http://localhost:4200/form/postUser
go to body tab select war and JSON format.
test posting this user.

{
    "name": "Miguel",
    "lastName": "Vargas",
    "phoneNumber": "(631) 658-6485",
    "email": "test@email.com",
    "password": "mM1testpassword"
}

with the response take the id string and pu it into the url, replace ":id" with the id

method GET :   http://localhost:4200/form/getUser/:id





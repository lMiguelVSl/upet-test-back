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

go to src/util/database.js en the line 6 you should put your mongodb atlass cluster to connect to your database


with these changes you should be able to excecute 'npm start' into the directory and the node server will be listening into the port 8080

if you wan to test the endpoint with postman these are the urls to test:

method POST:   http://localhost:8080/form/postUser
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

method GET :   http://localhost:8080/form/getUser/:id

to setup the test you should install these dependencies: 
npm install --save-dev mocha chai
after the installation with the command: npm test the unit tests are going to be excecuted.

to run the express server with docker:
you should have docker desktop in your machine.
first execute the next command to create the docker image: => docker build -t mavs/upet-test-back .

now in your cmd you can check the image with the next command => docker images

you should see the image create with the name mavs/upet-test-back

next, create the container with the nex command => docker run -p 80:8080 -d mavs/upet-test-back 
this command will create and execute the container in daemond mode so let's test it.

execute the next command after have one user already create in the database.

docker exec <container_name_or_id> curl http://localhost:8080/form/getUser/<user-id-from-mongoDB> 

and you can see the endpoint answer in your cmd
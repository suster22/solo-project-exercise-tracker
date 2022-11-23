/* require in express */
const express = require('express');
/* require in cors */
const cors = require('cors');
/* require in mongoose at the top of our server.js file. Help us connect to our MongoDB database */
const mongoose = require('mongoose');

/* require in dotenv and invoke config() method on it */
const dotenv = require('dotenv').config();

/* create our express server app */
const app = express();
/* create a new port that our server will be on. Make sure to check if
  process.env has a PORT already defined. If not, use a default port */
const port = 3000;

/* create a generic request handler with cors middleware */
app.use(cors());
/* create a generic request handler that will allow us to parse incoming
requests with JSON payloads  */
app.use(express.json());

/* by invoking the json method on the express module, it returns a middleware
that parses JSON and only looks at requests where the content type header
matches the type option */

const uri =
  'mongodb+srv://suster22:U0Kz0niRLqR0YZO8@cluster0.cwilbya.mongodb.net/?retryWrites=true&w=majority';

/* connect mongoose with mongoDB using URI retreived from MongoDB atlas. Pass
  in an options object with the below */

mongoose.connect(uri);

const connection = mongoose.connection;

/* Check if mongoDB connection is established by attaching a once event
  listener on the connection listening for event type 'open'. Print success
  message. */

connection.once('open', () => {
  console.log('Mongoose connected to MongoDB successfully!');
});

/* require in the the files we just created in our server
    at the bottom before the port listener. */

/* Use those files on server for any requests to specified endpoint
    /exercises and /users and pass in excersize router and users
    router as middleware */

const exercisesRouter = require('./routers/exercises');
const usersRouter = require('./routers/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

/* start our server by binding itself with the specified port (communication
   endpoint) to bind and listen for any connections. Once connected,
   print out confirmation that server is running on specified port */

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

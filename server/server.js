// import { RestBindings } from '@loopback/rest'; 

const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');


// Route includes
const userRouter = require('./routes/user.router');
const pictureRouter = require('./routes/picture.router');
// const imageRouter=require('./routes/image.router');
// Body parser middleware
app.use(bodyParser.json({limit: '900kb'}));
app.use(bodyParser.urlencoded({ extended: true }));
// app.bodyParser(XMLBodyParser)
// app.bind(RestBindings.REQUEST_BODY_PARSER_OPTIONS).to({limit:`10mb`})

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/picture', pictureRouter);
// app.use('/api/image', imageRouter);
// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});


  

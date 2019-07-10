//Connect to Mongo database
const mongoose = require('mongoose')
mongoose.Promise = global.Promise


//const uri = process.env.MONGODB_URI || 'mongodb://localhost/simple-mern-passport';
const uri = process.env.MONGODB_URI || 'mongodb://resu:resuuser2019@ds345587.mlab.com:45587/heroku_tfm9bttk';
//your local database url
//27017 is the default mongoDB port
// const uri = 'mongodb://localhost:27017/simple-mern-passport' 

// DATABASE FOR HEROKU
// login: resu
// password: resuuser2019
// const uri = 'mongodb://resu:resuuser2019@ds345587.mlab.com:45587/heroku_tfm9bttk'

mongoose.connect(uri).then(
    () => { 
        /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ 
        console.log('Connected to Mongo');
        
    },
    err => {
         /** handle initial connection error */ 
         console.log('error connecting to Mongo: ')
         console.log(err);
         
        }
  );


module.exports = mongoose.connection
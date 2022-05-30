const bodyparser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const path = require('path');

const connectDB = require('./server/database/connection');

const app = express();

dotenv.config({path:'config.env'})

 const PORT = process.env.PORT || 8080
 
 app.use(morgan('tiny'));

 connectDB();

 app.use(bodyparser.urlencoded({ extended: true}))

 app.set("view engine","ejs");
 //app.set("views",path.resolve(__dirname,"views/ejs"))

 app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
 app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
 app.use('/js',express.static(path.resolve(__dirname,"assets/js")))

 app.use('/',require('./server/routes/router'))


app.listen(3000,'0.0.0.0',()=>{console.log(`check Server on port ${PORT}`)});

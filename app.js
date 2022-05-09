require("dotenv").config();

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require("express");

const app = express();
const errorHandler = require('errorhandler');

const port = process.env.APP_PORT;

const apiRoute = require("./api/api.js");

//setting up the middlewares by using the app.use
app.use(bodyParser.json());
app.use(bodyParser.raw({type: 'application/xml'}));
app.use(cors());

//for catching error
app.use(errorHandler());

app.use(apiRoute);

app.listen(port, () => {
    console.log("Server up and running http://localhost:",port);
});

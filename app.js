require("dotenv").config();

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const fs = require("fs");
const jwt = require("jsonwebtoken");

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require("express");
const path = require('path');

const isAuthorized = require("./middleware/authentication");
const freedomRoot = require("./api/freedom/freedom.router");
const happinessRoot = require("./api/happiness/happiness.router");
const populationRoot = require("./api/population/population.router");
const errorHandler = require('errorhandler');

const app = express();

const port = process.env.APP_PORT;
const secret = process.env.URL_KEY;
const URL = process.env.DB_HOST;
const root = process.env.ROOT_API;
const swaggerRoot = process.env.SWAGGER_ROOT;
const code = process.env.ENC_SECRET;

//Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info:{
            title: "Data Processing: Node.js RESTful API",
            version: "1.9",
            description: "The API goal is support consuming applications",
            contact: {
                name:"Sander Siimann"
            },       
        },
        servers: [{
            url: "http://{username}:{port}/{basePath}",
            description: "local server to access to data",
            variables: {
                username: {
                    default: URL,
                    description: "value"
                }
            },
            port: {
                enum: [
                    port
                ],
                default: port
            },
            basePath: {
                default: swaggerRoot
            }
        }]
    },
    apis: ["./api/freedom/*.js", "./api/happiness/*.js", "./api/population/*.js"]
};

//setting up the middlewares by using the app.use
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.raw({type: 'application/xml'}));
app.use(cors());

//for catching error
app.use(errorHandler());

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs)); //Root http://localhost:5500/api-docs

app.get(secret, (req, res) => {
    let privateKey = fs.readFileSync(code, "utf8");
    let token = jwt.sign({"body": "stuff"}, privateKey, {algorithm: "HS256"});
    res.send(token);
});

app.use(root, isAuthorized, freedomRoot,(req, res) => {
    res.status(401).json({"message": "unauthorized"})
});

app.use(root, isAuthorized, happinessRoot,(req, res) => {
    res.status(401).json({"message": "unauthorized"})
});

app.use(root, isAuthorized, populationRoot,(req, res) => {
    res.status(401).json({"message": "unauthorized"})
});

app.listen(port, () => {
    console.log("Server up and running http://localhost:",port);
});

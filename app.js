require("dotenv").config();

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const express = require("express");

const isAuthorized = require("./middleware/authentication");
const freedomRoot = require("./api/freedom/freedom.router");
const errorHandler = require('errorhandler');

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
            title: "Data Processing: Statistic RESTful API",
            version: "1.6",
            description: "The API goal is support consuming applications",
            contact: {
                name:"Sander Siimann"
            },       
        },
        servers: {
            url: "http://{username}:{port}/{basePath}",
            description: "local server to access to user songs",
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
        }
    },
    apis: ["./api/freedom/*.js", "./api/happiness/*.js", "./api/population/*.js"]
};

const app = express();
app.use(express.json());

//for catching error
app.use(errorHandler());

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use(swaggerRoot, swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get(secret, (req, res) => {
    let privateKey = fs.readFileSync(code, "utf8");
    let token = jwt.sign({"body": "stuff"}, privateKey, {algorithm: "HS256"});
    res.send(token);
});

app.use(root, isAuthorized, freedomRoot,(req, res) => {
    res.status(401).json({"message": "unauthorized"})
});

app.listen(port, () => {
    console.log("Server up and running http://localhost:",port);
});

require("dotenv").config();
const express = require('express');
const apiRoute = express.Router();
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const freedomRoot = require("./freedom/freedom.router");
const happinessRoot = require("./happiness/happiness.router");
const populationRoot = require("./population/population.router");

const root = process.env.ROOT_API;
const swaggerRoot = process.env.SWAGGER_ROOT;
const port = process.env.APP_PORT;
const URL = process.env.DB_HOST;

//Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info:{
            title: "Data Processing: Node.js RESTful API",
            version: "2.0",
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
    apis: ["./freedom/*.js", "./happiness/*.js", "./population/*.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
apiRoute.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs)); //Root http://localhost:5500/api-docs

apiRoute.use(root, freedomRoot);

apiRoute.use(root, happinessRoot);

apiRoute.use(root, populationRoot);

module.exports = apiRoute;
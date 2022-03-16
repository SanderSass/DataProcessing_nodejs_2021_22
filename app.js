require("dotenv").config();

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express")

const express = require("express");
const isAuthorized = require("./middleware/authentication");
const freedomRoot = require("./api/freedom/freedom.router");

const port = process.env.APP_PORT;
const url = process.env.URL_KEY;
const URL = process.env.DB_HOST;
const root = process.env.ROOT_API;

const app = express();
app.use(express.json());

//Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
    swaggerDefinition: {
            openapi: "3.0.0",
            info:{
                title: "Data Processing: Statistic RESTful API",
                version: "1.2",
                description: "The API goal is support consuming applications",
                contact: {
                    name:"Sander Siimann"
                },       
            },
            servers: [
                {
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
                        default: root
                    }
                }
            ]
    },
    apis: ["./api/freedom/*.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// app.get(url, (req, res) => {
//     let privateKey = fs.readFileSync(code, "utf8");
//     let token = jwt.sign({"body": "stuff"}, privateKey, {algorithm: "HS256"});
//     res.send(token);
// });

app.use(root, freedomRoot,(req, res) => {
    res.status(401).json({"message": "unauhorized"})
});

app.listen(port, () => {
    console.log("Server up and running on port: ", port);
});
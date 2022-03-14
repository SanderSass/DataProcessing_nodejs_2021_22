require("dotenv").config();

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express")

const express = require("express");
const isAuthorized = require("./middleware/authentication");
const songRouter = require("./api/Songs/songs.router");
const spotifyClientIDRouter = require("./api/ClientId/spotify-client-id-router");
const keyRouter = require("./api/Keys/keys.router");

const port = process.env.APP_PORT;
const url = process.env.URL_KEY;
const URL = process.env.DB_HOST;
const musicURL = process.env.HOST_NAME
const root = process.env.ROUTE_R;
const rootKey = process.env.ROUTE_K;

//Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
    swaggerDefinition: {
            openapi: "3.0.0",
            info:{
                title: "Secure Programming: MusicApplication RESTful API",
                version: "1.6",
                description: "The API goal is to support Android application MusicApp. Please, to test API, use Postman. Also, accesing to the API, go to readme file.",
                contact: {
                    name:"Music group from Secure Programming"
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
                },
                {
                    url: "https://{username}.duckdns.org:{port}/{basePath}",
                    description: "Live server to access to spotify client id",
                    variables: {
                        username: {
                            default: musicURL,
                            description: "duckdns.org"
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
    apis: ["./api/Songs/*.js", "./api/ClientId/*.js"]
};

const app = express();

app.use(express.json());

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));


// app.get(url, (req, res) => {
//     let privateKey = fs.readFileSync(code, "utf8");
//     let token = jwt.sign({"body": "stuff"}, privateKey, {algorithm: "HS256"});
//     res.send(token);
// });

// app.use(root, isAuthorized, songRouter,(req, res) => {
//     res.status(401).json({"message": "unauhorized"})
// });

// app.use(root, isAuthorized, spotifyClientIDRouter,(req, res) => {
//     res.status(401).json({"message": "unauhorized"})
// });

// app.use(rootKey, isAuthorized, keyRouter, (req, res) => {
//     res.status(401).json({"message": "unauhorized"})
// })

app.listen(port, () => {
    console.log("Server up and running on port: ", port);
});

const { insertHappiness, readHappiness, readHappinessByCountry, updateHappiness, deleteHappiness } = require("./happiness.service");

const validateJson = require("../../middleware/validateJson.js");
// const validateXml = require("../../middleware/validateXml.js");

const schemaJson = require("../../schemas/json/happiness.json");
// const schemaXml = require("../../schemas/xsd/happiness.xsd");

module.exports = {

    //Insert happiness data
    insertHappiness: async (req, res) => {
        const body = req.body;
        if (req.get('Content-Type') === 'application/json') {
            try {
                validateJson(schemaJson, body);
            } catch (error) {
                res.status(401).end('Body of insert freedom is not valid with Schema' + err.message);
            }
            insertHappiness(body, (err, results) => {
                if (err) {
                    console.log(err);
                    return res.status(400).json({
                        success: 0,
                        message: "Bad POST request" + err.code
                    });
                } else if (!err) {
                    return res.status(201).json({
                        success: 1,
                        data: results,
                        message: "New happiness data inserted"
                    });
                }
            });
        }
        if (req.get('Content-Type') === 'application/xml') {
            // try
            // {
            //     validateXml(schemaXml, body);
            // }
            // catch(error){
            //     res.send(end('Body of happiness is not valid with Schema' + error.message));
            // }
            insertHappiness(body, (err, results) => {
                if (err) {
                    console.log(err);
                    return res.status(400).send(xml({
                        success: 0,
                        message: "Bad POST request" + err.code
                    }));
                } else if (!err) {
                    return res.status(201).send(xml({
                        success: 1,
                        data: results,
                        message: "New happiness data inserted"
                    }));
                }
            });
        }
    },

    //Read happiness data
    readHappiness: async (req, res) => {
        if (req.get('Content-Type') === 'application/json') {
            readHappiness((err, results) => {
                if (err) {
                    console.log(err);
                    return res.status(400).json({
                        success: 0,
                        data: "Bad GET Request: " + err.code
                    });
                } else if (!results) {
                    return res.status(204).json({
                        success: 0,
                        message: "Record not found!"
                    });
                } else {
                    return res.status(200).json({
                        success: 1,
                        data: results
                    });
                }
            });
        }
        if (req.get('Content-Type') === 'application/xml') {
            readHappiness((err, results) => {
                if (err) {
                    console.log(err);
                    return res.status(400).send(xml({
                        success: 0,
                        data: "Bad GET Request: " + err.code
                    }));
                } else if (!results) {
                    return res.status(204).send(xml({
                        success: 0,
                        message: "Record not found!"
                    }));
                } else {
                    return res.status(200).send(xml({
                        success: 1,
                        data: results
                    }));
                }
            });
        }
    },

    readHappinessByCountry: async (req, res) => {
        const Country = req.params.Country;
        if (req.get('Content-Type') === 'application/json') {
            readHappinessByCountry(Country, (err, results) => {
                if (err) {
                    console.log(err);
                    return res.status(400).json({
                        success: 0,
                        data: "Bad GET Request: " + err.code
                    });
                } else if (!results) {
                    return res.status(204).json({
                        success: 0,
                        message: "Record not found!"
                    });
                } else {
                    return res.status(200).json({
                        success: 1,
                        data: results
                    });
                }
            });
        }
        if (req.get('Content-Type') === 'application/xml') {
            readHappinessByCountry(Country, (err, results) => {
                if (err) {
                    console.log(err);
                    return res.status(400).send(xml({
                        success: 0,
                        data: "Bad GET Request: " + err.code
                    }));
                } else if (!results) {
                    return res.status(204).send(xml({
                        success: 0,
                        message: "Record not found!"
                    }));
                } else {
                    return res.status(200).send(xml({
                        success: 1,
                        data: results
                    }));
                }
            });
        }
    },

    updateHappiness: async (req, res) => {
        const body = req.body;

        if (req.get('Content-Type') === 'application/json') {
            try {
                validateJson(schemaJson, body);
            } catch (error) {
                res.status(401).end('Body of update happiness is not valid with Schema' + err.message);
            }
            updateHappiness(body, (err, results) => {
                if (err) {
                    console.log(err);
                    return res.status(400).json({
                        success: 0,
                        data: "Bad UPDATE Request" + err.code
                    });
                }
                if (!results) {
                    return res.status(204).json({
                        success: 0,
                        message: "Record not found!"
                    });
                }
                return res.status(200).json({
                    success: 1,
                    message: "Updated successfully!"
                });
            });
        }
        if (req.get('Content-Type') === 'application/xml') {
            // try
            // {
            //     validateXml(schemaXml, body);
            // }
            // catch(error){
            //     res.send(end('Body of happiness is not valid with Schema' + error.message));
            // }
            updateHappiness(body, (err, results) => {
                if (err) {
                    console.log(err);
                    return res.status(400).send(xml({
                        success: 0,
                        data: "Bad UPDATE Request" + err.code
                    }));
                }
                if (!results) {
                    return res.status(204).send(xml({
                        success: 0,
                        message: "Record not found!"
                    }));
                }
                return res.status(200).send(xml({
                    success: 1,
                    message: "Updated successfully!"
                }));
            });
        }
    },

    deleteHappiness: async (req, res) => {
        const data = req.body;
        if (req.get('Content-Type') === 'application/json') {
            deleteHappiness(data, (err, results) => {
                if (err) {
                    console.log(err);
                    return res.status(400).json({
                        success: 0,
                        data: "Bad DELETE Request" + err.code
                    });
                }
                if (!results) {
                    return res.status(204).json({
                        success: 0,
                        message: "Record not found!"
                    });
                } else {
                    return res.status(200).json({
                        success: 1,
                        message: "freedom is deleted successfully!"
                    });
                }
            });
        }
        if (req.get('Content-Type') === 'application/xml') {
            deleteHappiness(data, (err, results) => {
                if (err) {
                    console.log(err);
                    return res.status(400).send(xml({
                        success: 0,
                        data: "Bad DELETE Request" + err.code
                    }));
                }
                if (!results) {
                    return res.status(204).send(xml({
                        success: 0,
                        message: "Record not found!"
                    }));
                } else {
                    return res.status(200).send(xml({
                        success: 1,
                        message: "freedom is deleted successfully!"
                    }));
                }
            });
        }
    }
};
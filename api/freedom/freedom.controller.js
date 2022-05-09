const { insertFreedom, readFreedom, readFreedomByCountry, updateFreedom, deleteFreedom } = require("./freedom.service");

const xml = require("object-to-xml");

const validateJson = require("../../middleware/validateJson.js");
// const validateXml = require("../../middleware/validateXml.js");

const schemaJson = require("../../schemas/json/freedom.json");
// const schemaXml = require("../../schemas/xsd/freedom.xsd");


module.exports = {

    //Insert freedom data
    insertFreedom: async (req, res) => {
        const body = req.body;

        if (req.get('Content-Type') === 'application/json') {
            try {
                validateJson(schemaJson, body);
            } catch (error) {
                res.status(401).end('Body of freedom is not valid with Schema' + err.message);
            }
            insertFreedom(body, (error, results) => {
                if (error) {
                    console.log(error);
                    return res.status(400).json({
                        success: 0,
                        message: "Bad POST request" + error.code
                    });
                } else if (!error) {
                    return res.status(201).json({
                        success: 1,
                        data: results,
                        message: "New freedom data inserted"
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
            //     res.send(end('Body of insert freedom is not valid with Schema' + error.message));
            // }
            insertFreedom(body, (error, results) => {
                if (error) {
                    console.log(error);
                    return res.status(400).send(xml({
                        success: 0,
                        message: "Bad POST request" + error.code
                    }));
                } else if (!error) {
                    return res.status(201).send(xml({
                        success: 1,
                        freedoms: results,
                        message: "New freedom data inserted"
                    }));
                }
            });
        }
    },

    //GET list of freedom data
    readFreedom: async (req, res) => {
        if (req.get('Content-Type') === 'application/json') {
            readFreedom((err, results) => {
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
            readFreedom((err, results) => {
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
                        freedoms: {
                            freedom: results
                        }
                    }));
                }
            });
        }
    },

    //GET list of freedom data by country
    readFreedomByCountry: async (req, res) => {
        const Country = req.params.Country;

        if (req.get('Content-Type') === 'application/json') {
            readFreedomByCountry(Country, (err, results) => {
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
            readFreedomByCountry(Country, (error, results) => {
                if (error) {
                    console.log(err);
                    return res.status(400).send(xml({
                        success: 0,
                        data: "Bad GET Request: " + error.code
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

    //UPDATE freedom data
    updateFreedom: async (req, res) => {
        const body = req.body;

        if (req.get('Content-Type') === 'application/json') {
            try {
                validateJson(schemaJson, body);
            } catch (error) {
                res.status(401).end('Body of freedom is not valid with Schema' + err.message);
            }
            updateFreedom(body, (error, results) => {
                if (error) {
                    console.log(err);
                    return res.status(400).json({
                        success: 0,
                        data: "Bad UPDATE Request" + error.code
                    });
                }
                if (!results) {
                    return res.status(404).json({
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
            //     res.send(end('Body of freedom is not valid with Schema' + error.message));
            // }
            updateFreedom(body, (error, results) => {
                if (error) {
                    console.log(err);
                    return res.status(400).send(xml({
                        success: 0,
                        data: "Bad UPDATE Request" + error.code
                    }));
                }
                if (!results) {
                    return res.status(404).send(xml({
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

    //DELETE freedom data
    deleteFreedom: async (req, res) => {
        const data = req.body;

        if (req.get('Content-Type') === 'application/json') {
            deleteFreedom(data, (err, results) => {
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
            deleteFreedom(data, (err, results) => {
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

}
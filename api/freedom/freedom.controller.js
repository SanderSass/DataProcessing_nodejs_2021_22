const { insertFreedom, readFreedom, readFreedomByCountry, updateFreedom, deleteFreedom } = require("./freedom.service");

const xml = require("object-to-xml");

const validateJson = require("../../middleware/validateJson.js");
const validateXml = require("../../middleware/validateXml.js");

const populatioJsonSchema = require("../../schemas/json/freedom.json");
// const populationXmlSchema = require("../../schemas/xsd/population.xsd");

//const validXml = validateXml(populationXmlSchema);

module.exports = {
    insertFreedom: (req, res) => {

        const body = req.body;

        if (req.get('Content-Type') === 'application/json') {

            insertFreedom(body, (error, results) => {
                if (err) {
                    console.log(err);
                    return res.status(400).json({
                        success: 0,
                        message: "Bad POST request" + err.code
                    });
                } else if (!err) {
                    return res.status(201).json({
                        success: 1,
                        data: results
                    });
                }
            });
        }

        if (req.get('Content-Type') === 'application/xml') {
            insertFreedom(body, (error, results) => {
                if (err) {
                    console.log(err);
                    return res.send(xml({
                        success: 0,
                        message: "Bad POST request" + err.code
                    }));
                } else if (!err) {
                    return res.send(xml({
                        success: 1,
                        freedoms: results
                    }));
                }
            });
        }
    },

    //GET list of freedom data
    readFreedom: (req, res) => {
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
                    return res.send(xml({
                        success: 0,
                        data: "Bad GET Request: " + err.code
                    }));
                } else if (!results) {
                    return res.send(xml({
                        success: 0,
                        message: "Record not found!"
                    }));
                } else {
                    return res.send(xml({
                        freedoms: {
                            freedom: results
                        }
                    }));
                }
            });
        }
    },

    readFreedomByCountry: (req, res) => {
        const Country = req.params.Country;
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
    },

    updateFreedom: (req, res) => {
        const body = req.body;
        updateFreedom(body, (err, results) => {
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
    },

    deleteFreedom: (req, res) => {
        const data = req.body;
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
}
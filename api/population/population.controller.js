const { insertPopulation, readPopulation, readPopulationByCountry, updatePopulation, deletePopulation } = require("./population.service");

const xml = require("object-to-xml");

const validateJson = require("../../middleware/validateJson.js");
const validateXml = require("../../middleware/validateXml.js");

const schemaJson = require("../../schemas/json/population.json");
// const schemaXml = require("../../schemas/xsd/population.xsd");


module.exports = {

    //Insert population data
    insertPopulation: async (req, res, next) => {
        const body = req.body;

        if (req.get('Content-Type') === 'application/json') {

            try {
                validateJson(schemaJson, body);
            }
            catch (err) {
                res.status(401).end('Body of population is not valid with Schema' + err.message);
            }

            insertPopulation(body, (err, results) => {
                if (err) {
                    res.status(400).send({
                        success: 0,
                        message: "Bad POST request " + err.code
                    });
                } else {
                    res.status(201).send({
                        success: 1,
                        data: results,
                        message: "New population data inserted" + results
                    });
                }
            });
        }
        if (req.get('Content-Type') === 'application/xml') {

            //     country,
            //     region,
            //     population,
            //     area_sq_mi,
            //     pop_Density_per_sq_mi,
            //     coastline_coast_area_ratio,
            //     net_migration,
            //     infant_mortality_per_1000_births,
            //     gDP_per_capita,
            //     literacy,
            //     phones_per_1000,
            //     arable,
            //     crops,
            //     other,
            //     climate,
            //     birthrate,
            //     deathrate,
            //     agriculture,
            //     industry,
            //     service

            // try
            // {
            //     validateXml(schemaXml, body);
            // }
            // catch(error){
            //     res.send(end('Body of insert freedom is not valid with Schema' + error.message));
            // }
            insertPopulation(body, (err, results) => {
                if (err) {
                    res.status(400).send(xml({
                        success: 0,
                        message: "Bad POST request " + err.code
                    }));
                } else {
                    res.status(201).send(xml({
                        success: 1,
                        populations: results,
                        message: "New population data inserted" + results
                    }));
                }
            });
        }
    },

    //Read population data
    readPopulation: async (req, res, next) => {
        if (req.get('Content-Type') === 'application/json') {
            readPopulation((err, results) => {
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
            readPopulation((err, results) => {
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

    //Read population data by country
    readPopulationByCountry: async (req, res) => {
        const Country = req.params.Country;

        if (req.get('Content-Type') === 'application/json') {
            readPopulationByCountry(Country, (err, results) => {
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
            readPopulationByCountry(Country, (err, results) => {
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

    //Update population data
    updatePopulation: async (req, res) => {
        const body = req.body;
        if (req.get('Content-Type') === 'application/json') {
            try {
                validateJson(schemaJson, body);
            } catch (error) {
                res.status(401).end('Body of freedom is not valid with Schema' + err.message);
            }
            updatePopulation(body, (err, results) => {
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
            //     res.send(end('Body of freedom is not valid with Schema' + error.message));
            // }
            updatePopulation(body, (err, results) => {
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

    //Delete population data
    deletePopulation: async (req, res) => {
        const data = req.body;
        if (req.get('Content-Type') === 'application/json') {
            deletePopulation(data, (err, results) => {
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
            deletePopulation(data, (err, results) => {
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
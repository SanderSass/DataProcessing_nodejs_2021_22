const { insertPopulation, readPopulation, readPopulationByCountry, updatePopulation, deletePopulation } = require("./population.service");

const xml = require("object-to-xml");

const validateJson = require("../../middleware/validateJson.js");
const validateXml = require("../../middleware/validateXml.js");

const populatioJsonSchema = require("../../schemas/json/population.json");
// const populationXmlSchema = require("../../schemas/xsd/population.xsd");

//const validXml = validateXml(populationXmlSchema);

module.exports = {
    insertPopulation: async (req, res, next) => {

        const body = req.body;

        //POSt request with json schema
        if (req.get('Content-Type') === 'application/json') {

            try {
                validateJson(populatioJsonSchema, body);
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
                        message: "New population data inserted" + results
                    });
                }
            });
        }

        // //POST request with XML body
        // if (req.get('Content-Type') === 'application/xml') {

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

        //     insertPopulation(body, (err, results) => {
        //         if (err) {
        //             res.status(400).send({
        //                 success: 0,
        //                 message: "Bad POST request " + err.code
        //             });
        //         } else {
        //             res.status(201).send({
        //                 success: 1,
        //                 message: "New population data inserted" + results
        //             });
        //         }
        //     });
        // }
    },

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
                    return res.status(400).xml({
                        success: 0,
                        data: "Bad GET Request: " + err.code
                    });
                } else if (!results) {
                    return res.status(204).xml({
                        success: 0,
                        message: "Record not found!"
                    });
                } else {
                    return res.status(200).xml({
                        success: 1,
                        data: results
                    });
                }
            });
        }
    },

    readPopulationByCountry: async (req, res) => {
        const Country = req.params.Country;
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
    },

    updatePopulation: async (req, res) => {
        const body = req.body;
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
    },

    deletePopulation: async (req, res) => {
        const data = req.body;
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
}
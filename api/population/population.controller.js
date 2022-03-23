const {insertPopulation, readPopulation, readPopulationByCountry, updatePopulation, deletePopulation} = require("./population.service");

module.exports = {
    insertPopulation: (req, res) => {
        const body = req.body;
        insertPopulation(body, (err, results) =>{
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
    },

    readPopulation: (req, res) => {
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
    },

    readPopulationByCountry: (req, res) => {
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

    updatePopulation: (req, res) => {
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

    deletePopulation: (req, res) => {
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
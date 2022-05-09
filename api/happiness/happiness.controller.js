const {insertHappiness, readHappiness, readHappinessByCountry, updateHappiness, deleteHappiness} = require("./happiness.service");

module.exports = {
    insertHappiness: async (req, res) => {
        const body = req.body;
        insertHappiness(body, (err, results) =>{
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

    readHappiness: async (req, res) => {
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
    },

    readHappinessByCountry: async (req, res) => {
        const Country = req.params.Country;
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
    },

    updateHappiness: async (req, res) => {
        const body = req.body;
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
    },

    deleteHappiness: async (req, res) => {
        const data = req.body;
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
};
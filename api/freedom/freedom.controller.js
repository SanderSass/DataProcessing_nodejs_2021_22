const {insertFreedom, readFreedom, readFreedomByCountry} = require("./freedom.service");

module.exports = {
    insertFreedom: (req, res) => {
        const body = req.body;
        insertFreedom(body, (err, results) =>{
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

    readFreedom: (req, res) => {
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
    }
}
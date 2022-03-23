//require("dotenv").config();
const pool = require("../../config/database");

module.exports = {
    insertHappiness: (data, callBack) =>{
        pool.query(
            "INSERT INTO happiness (Country, Happiness_Rank, Happiness_Score, Economy, Family, Health,Freedom, Trust, Generosity, Year) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
            [data.Country,
                data.Happiness_Rank,
                data.Happiness_Score,
                data.Economy,
                data.Family,
                data.Health,
                data.Freedom,
                data.Trust,
                data.Generosity,
                data.Year],
            (error, results, fields) => {
                if (!error) {
                    return callBack(error);
                } else {
                    return callBack(results)
                }
            }
        )
    },
    readHappiness: callBack =>{
        pool.query(
            "SELECT * FROM happiness ORDER BY Year ASC",
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                } else {
                    return callBack(null, results)
                }
            }
        )
    },
    readHappinessByCountry: (Country, callBack) =>{
        pool.query(
            "SELECT * FROM happiness WHERE Country=?",
            [Country],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                } else {
                    return callBack(null, results)
                }
            }
        )
    },
    updateHappiness: (data, callBack) => {
        pool.query(
            "UPDATE happiness SET Happiness_Rank=?, Happiness_Score=?, Economy=?, Family=?, Health=?,Freedom=?, Trust=?, Generosity=?, Year=? WHERE Country=?",
            [data.Happiness_Rank,
                data.Happiness_Score,
                data.Economy,
                data.Family,
                data.Health,
                data.Freedom,
                data.Trust,
                data.Generosity,
                data.Year,
                data.Country],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                } else {
                    return callBack(null, results)
                }
            }
        )
    },
    deleteHappiness: (data, callBack) => {
        pool.query(
            "DELETE FROM happiness WHERE Country=?",
            [data.Country],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results)
            }
        )
    }
};

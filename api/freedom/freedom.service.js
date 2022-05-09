require("dotenv").config();
const pool = require("../../config/database");

module.exports = {
    insertFreedom: (freedom, callBack) =>{
        pool.query(
            "INSERT INTO freedom (Year, ISO_Code, Country, PERSONAL_FREEDOM_Score, ECONOMIC_FREEDOM_Score, HUMAN_FREEDOM_Score, HUMAN_FREEDOM_Rank, HUMAN_FREEDOM_Quartile) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
            [freedom.Year,
            freedom.ISO_Code,
            freedom.Country,
            freedom.PERSONAL_FREEDOM_Score,
            freedom.ECONOMIC_FREEDOM_Score,
            freedom.HUMAN_FREEDOM_Score,
            freedom.HUMAN_FREEDOM_Rank,
            freedom.HUMAN_FREEDOM_Quartile],
            (error, results, fields) => {
                if (!error) {
                    return callBack(error);
                } else {
                    return callBack(results)
                }
            }
        )
    },
    readFreedom: callBack =>{
        const sql = "SELECT * FROM freedom ORDER BY Year ASC";
        const values = [];
        pool.query(
            sql,
            values,
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                } else {
                    return callBack(null, results)
                }
            }
        )
    },
    readFreedomByCountry: (Country, callBack) =>{
        pool.query(
            "SELECT * FROM freedom WHERE Country = ?",
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
    updateFreedom: (data, callBack) => {
        pool.query(
            "UPDATE freedom SET Year=?, ISO_Code=?, Country=?, PERSONAL_FREEDOM_Score=?, ECONOMIC_FREEDOM_Score=?, HUMAN_FREEDOM_Score=?, HUMAN_FREEDOM_Rank=?, HUMAN_FREEDOM_Quartile=? WHERE Year=?",
            [data.Year,
            data.ISO_Code,
            data.Country,
            data.PERSONAL_FREEDOM_Score,
            data.ECONOMIC_FREEDOM_Score,
            data.HUMAN_FREEDOM_Score,
            data.HUMAN_FREEDOM_Rank,
            data.HUMAN_FREEDOM_Quartile],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                } else {
                    return callBack(null, results)
                }
            }
        )
    },
    deleteFreedom: (data, callBack) => {
        pool.query(
            "DELETE FROM freedom WHERE Year=? AND Country=?",
            [data.Year,
            data.Country],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results)
            }
        )
    }
}

require("dotenv").config();
const pool = require("../../config/database");

module.exports = {
    insertFreedom: (data, callBack) =>{
        pool.query(
            "INSERT INTO freedom (Year, ISO_Code, Country, PERSONAL_FREEDOM_Score, ECONOMIC_FREEDOM_Score, HUMAN_FREEDOM_Score, HUMAN_FREEDOM_Rank, HUMAN_FREEDOM_Quartile) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
            [data.Year,
            data.IsoCode,
            data.Conutries,
            data.PersonalFreedomScore,
            data.EconomicFreedomScore,
            data.HumanFreedomScore,
            data.HumanFreedomRank,
            data.HumanFreedomQuartile],
            (error, results, fields) => {
                if (!error) {
                    return callBack(error);
                } else {
                    return callBack(results)
                }
            }
        )
    },
    readFreedom: () =>{
        pool.query(
            "SELECT * FROM freedom",
            [],
            (error, results, fields) => {
                if (!error) {
                    return callBack(error);
                } else {
                    return callBack(results)
                }
            }
        )
    },
    // updateFreedom: () => {

    // },
    // deleteFreedom: () => {

    // }
}

require("dotenv").config();
const pool = require("../../config/database");

module.exports = {
    insertPopulation: (data, callBack) =>{
        pool.query(
            "INSERT INTO population (Country, Region, Population, Area_sq_mi, Pop_Density_per_sq_mi, Coastline_coast_area_ratio, Net_migration, Infant_mortality_per_1000_births, GDP_per_capita, Literacy, Phones_per_1000, Arable, Crops, Other, Climate, Birthrate, Deathrate, Agriculture, Industry, Service) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
            [data.Year,
            data.ISO_Code,
            data.Country,
            data.PERSONAL_FREEDOM_Score,
            data.ECONOMIC_FREEDOM_Score,
            data.HUMAN_FREEDOM_Score,
            data.HUMAN_FREEDOM_Rank,
            data.HUMAN_FREEDOM_Quartile],
            (error, results, fields) => {
                if (!error) {
                    return callBack(error);
                } else {
                    return callBack(results)
                }
            }
        )
    },
    readPopulation: callBack =>{
        pool.query(
            "SELECT * FROM population ORDER BY Year ASC",
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
    readPopulationByCountry: (Country, callBack) =>{
        pool.query(
            "SELECT * FROM population WHERE Country = ?",
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
    updatePopulation: (data, callBack) => {
        pool.query(
            "UPDATE population SET Year=?, ISO_Code=?, Country=?, PERSONAL_FREEDOM_Score=?, ECONOMIC_FREEDOM_Score=?, HUMAN_FREEDOM_Score=?, HUMAN_FREEDOM_Rank=?, HUMAN_FREEDOM_Quartile=? WHERE Year=?",
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
    deletePopulation: (data, callBack) => {
        pool.query(
            "DELETE FROM population WHERE Year=?",
            [data.Year],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results)
            }
        )
    }
}
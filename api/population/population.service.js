require("dotenv").config();
const pool = require("../../config/database");

module.exports = {
    insertPopulation: (data, callBack) =>{
        pool.query(
            "INSERT INTO population (Country, Region, Population, Area_sq_mi, Pop_Density_per_sq_mi, Coastline_coast_area_ratio, Net_migration, Infant_mortality_per_1000_births, GDP_per_capita, Literacy, Phones_per_1000, Arable, Crops, Other, Climate, Birthrate, Deathrate, Agriculture, Industry, Service) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
            [data.Country,
            data.Region,                                                    
            data.Population,
            data.Area_sq_mi,
            data.Pop_Density_per_sq_mi,
            data.Coastline_coast_area_ratio,
            data.Net_migration,
            data.Infant_mortality_per_1000_births,
            data.GDP_per_capita,
            data.Literacy,
            data.Phones_per_1000,
            data.Arable,
            data.Crops,
            data.Other,
            data.Climate,
            data.Birthrate,
            data.Deathrate,
            data.Agriculture,
            data.Industry,
            data.Service],
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
            "SELECT * FROM population WHERE Country=?",
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
            "UPDATE population SET Region=?, Population=?, Area_sq_mi=?, Pop_Density_per_sq_mi=?, Coastline_coast_area_ratio=?, Net_migration=?, Infant_mortality_per_1000_births=?, GDP_per_capita=?, Literacy=?, Phones_per_1000=?, Arable=?, Crops=?, Other=?, Climate=?, Birthrate=?, Deathrate=?, Agriculture=?, Industry=?, Service=? WHERE Country=?",
            [data.Region,                                                    
                data.Population,
                data.Area_sq_mi,
                data.Pop_Density_per_sq_mi,
                data.Coastline_coast_area_ratio,
                data.Net_migration,
                data.Infant_mortality_per_1000_births,
                data.GDP_per_capita,
                data.Literacy,
                data.Phones_per_1000,
                data.Arable,
                data.Crops,
                data.Other,
                data.Climate,
                data.Birthrate,
                data.Deathrate,
                data.Agriculture,
                data.Industry,
                data.Service,
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
    deletePopulation: (data, callBack) => {
        pool.query(
            "DELETE FROM population WHERE Country=?",
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
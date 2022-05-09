require("dotenv").config();
const pool = require("../../config/database");

module.exports = {
    insertPopulation: (Population, callBack) => {
        const sql = "INSERT INTO population (Country, Region, Population, Area_sq_mi, Pop_Density_per_sq_mi, Coastline_coast_area_ratio, Net_migration, Infant_mortality_per_1000_births, GDP_per_capita, Literacy, Phones_per_1000, Arable, Crops, Other, Climate, Birthrate, Deathrate, Agriculture, Industry, Service)"
            + " VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

        const values = [
            Population.Country,
            Population.Region,
            Population.Population,
            Population.Area_sq_mi,
            Population.Pop_Density_per_sq_mi,
            Population.Coastline_coast_area_ratio,
            Population.Net_migration,
            Population.Infant_mortality_per_1000_births,
            Population.GDP_per_capita,
            Population.Literacy,
            Population.Phones_per_1000,
            Population.Arable,
            Population.Crops,
            Population.Other,
            Population.Climate,
            Population.Birthrate,
            Population.Deathrate,
            Population.Agriculture,
            Population.Industry,
            Population.Service
        ];
        values.Phones_per_1000

        pool.query(
            sql,
            values,
            (err, results) => {
                if (err) {
                    return callBack(error);
                } else {
                    return callBack(results)
                }
            }
        );
    },

    readPopulation: callBack => {
        const sql = "SELECT * FROM population ORDER BY Year ASC";
        const values = [];
        pool.query(
            sql,
            values,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                } else {
                    return callBack(results)
                }
            }
        );
    },

    readPopulationByCountry: (Country, callBack) => {
        pool.query(
            "SELECT * FROM population WHERE Country=?",
            [Country],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                } else {
                    return callBack(results)
                }
            }
        )
    },

    updatePopulation: (population, callBack) => {
        pool.query(
            "UPDATE population SET Region=?, Population=?, Area_sq_mi=?, Pop_Density_per_sq_mi=?, Coastline_coast_area_ratio=?, Net_migration=?, Infant_mortality_per_1000_births=?, GDP_per_capita=?, Literacy=?, Phones_per_1000=?, Arable=?, Crops=?, Other=?, Climate=?, Birthrate=?, Deathrate=?, Agriculture=?, Industry=?, Service=? WHERE Country=?",
            [population.Region,
            population.Population,
            population.Area_sq_mi,
            population.Pop_Density_per_sq_mi,
            population.Coastline_coast_area_ratio,
            population.Net_migration,
            population.Infant_mortality_per_1000_births,
            population.GDP_per_capita,
            population.Literacy,
            population.Phones_per_1000,
            population.Arable,
            population.Crops,
            population.Other,
            population.Climate,
            population.Birthrate,
            population.Deathrate,
            population.Agriculture,
            population.Industry,
            population.Service,
            population.Country],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                } else {
                    return callBack(results)
                }
            }
        )
    },

    deletePopulation: (population, callBack) => {
        pool.query(
            "DELETE FROM population WHERE Country=?",
            [population.Year],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(results)
            }
        )
    }
}
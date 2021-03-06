const {insertPopulation, readPopulation, readPopulationByCountry, updatePopulation, deletePopulation} = require("./population.controller");

const router = require("express").Router();
const validateJson = require("../../middleware/validateJson");
const freedomSchema = require("../../schemas/json/freedom.json");

/**
 * @swagger
 * /population:
 *  post:
 *      description: Inserting new population data
 *      responses: 
 *          '201':
 *              description: The request succeeded
 *          '400':
 *              description: Bad POST Request
 */
 router.post("/population", validateJson(freedomSchema), insertPopulation);

 /**
  * @swagger
  * /population:
  *  get:
  *      description: Select population data
  *      responses:
  *          '200':
  *              description: A successful response
  *          '204':
  *              description: Record not found
  *          '400':
  *              description: Bad GET Request
  */
 router.get("/population", readPopulation);

  /**
  * @swagger
  * /population/:Country:
  *  get:
  *      description: Select population data by Country
  *      responses:
  *          '200':
  *              description: A successful response
  *          '204':
  *              description: Record not found
  *          '400':
  *              description: Bad GET Request
  */
  router.get("/population/:Country", readPopulationByCountry);

 /**
  * @swagger
  * /population:
  *  patch:
  *      description: Use it to update the population
  *      responses:
  *          '200':
  *              description: Updated successfully!
  *          '204':
  *              description: Record not found
  *          '400':
  *              description: Bad Update Request
  */
 router.patch("/population", validateJson(freedomSchema), updatePopulation);

 /**
  * @swagger
  * /population:
  *  delete:
  *      description: Use it to delete the population
  *      responses:
  *          '200':
  *              description: "Population is deleted successfully!"
  *          '204':
  *              description: Record not found
  *          '400':
  *              description: Bad Delete Request
  */
 router.delete("/population", validateJson(freedomSchema), deletePopulation);

module.exports = router;
